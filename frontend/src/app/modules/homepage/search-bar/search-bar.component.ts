import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HomeComponent } from '../../../components/home/home.component';
import { Subscription } from 'rxjs'; 
import { GetBooksDataService } from '../../../services/get-books-data.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HomeComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit, OnDestroy{
  filteredData: any[] = [];
  searchQuery: string = '';
  bookData: any[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private getBooksDataService: GetBooksDataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscription.add(
      this.getBooksDataService.getBooksData().subscribe({
        next: (result: any[]) => {
          this.filteredData = result;
          this.bookData = result;
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      })
    );
  }

  onSearch() {
    this.filteredData = this.bookData.filter((book) =>
      book.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Unsubscribe to avoid memory leaks
  }
}
