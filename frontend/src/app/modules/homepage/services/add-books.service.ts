import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddBooksService {

  add_Book_url = "https://50c0-14-192-136-180.ngrok-free.app/store/products/addProduct"
  constructor(private http:HttpClient) { }

  Book_Add(payload:{
    name: string,
    author: string,
    category: string,
    rating: number,
  }){
    return this.http.post(this.add_Book_url,{ //use post to store data in db, entered in form by user 
      name: payload.name,
      author: payload.author,
      category: payload.category,
      rating: payload.rating,
    });
  }

}
