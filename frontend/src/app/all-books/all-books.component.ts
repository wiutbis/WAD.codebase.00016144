import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
  imports: [CommonModule, RouterModule],
})
export class AllBooksComponent implements OnInit {
  constructor() {}
  books: any[] = []; // Initialize the books array

  ngOnInit(): void {
    // Use a simple fetch request to get data from the API
    fetch('http://localhost:5107/api/Book/GetAll')
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        this.books = data; // Set the books array to the fetched data
      })
      .catch((error) => {
        console.error('Error fetching books:', error); // Handle errors
      });
  }

  editBook(bookId: number): void {
    console.log('Edit book with ID:', bookId);
  }

  deleteBook(bookId: number): void {
    console.log('Delete book with ID:', bookId);
  }
}
