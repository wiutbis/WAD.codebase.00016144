import { Component } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './allbooks.html',
  styleUrls: ['./styles.css'],
  standalone: true, // Mark this as a standalone component
})
export class AllBooks {
  title: string | undefined;
  description: string | undefined;

  onSubmit() {
    async function fetchAllBooks() {
      try {
        const response = await fetch('http://localhost:5107/api/Book/Create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: 0,
            title: 'Muhammadjon',
            description: 'Charchatvordiz',
            categoryID: 1,
            category: {
              id: 0,
              name: 'string',
            },
            publishedDate: '2024-12-04T14:22:34.136Z',
            author: 'Enasi',
          }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const books = await response.json();
        console.log('Books:', books);
        return books;
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    }

    fetchAllBooks();
    console.log('Title:', this.title);
    console.log('Description:', this.description);
  }
}
