import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetBooksDataService } from '../../../services/get-books-data.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HomeComponent } from '../../../components/home/home.component';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HomeComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {
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
      book.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Unsubscribe to avoid memory leaks
  }
}
