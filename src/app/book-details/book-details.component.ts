import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  imports: [RouterModule, CommonModule],
})
export class BookDetailsComponent implements OnInit {
  bookId: number | null = null;
  bookDetails: any;
  categories: Array<{ id: number; name: string }> = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    // Make the API call to fetch book details using fetch
    if (this.bookId) {
      fetch(`http://localhost:5107/api/Book/GetByID/${this.bookId}`)
        .then((response) => response.json()) // Parse JSON from the response
        .then((data) => {
          this.bookDetails = data;
          this.fillForm(); // Populate the form fields after data is received
        })
        .catch((error) => {
          console.error('Error fetching book details:', error);
        });
    }
    // Fetch categories
    fetch('http://localhost:5107/api/Category/Get')
      .then((response) => response.json())
      .then((data) => (this.categories = data))
      .catch((error) => console.error('Error fetching categories:', error));
  }

  fillForm(): void {
    if (this.bookDetails) {
      const form = document.querySelector('.form') as HTMLFormElement;
      if (form) {
        (form.querySelector('#title') as HTMLInputElement).value =
          this.bookDetails.title;
        (form.querySelector('#description') as HTMLTextAreaElement).value =
          this.bookDetails.description;
        (form.querySelector('#Categoryid') as HTMLSelectElement).value =
          this.bookDetails.categoryID;
        (form.querySelector('#pubdatae') as HTMLInputElement).value =
          this.bookDetails.publishedDate.split('T')[0];
        (form.querySelector('#author') as HTMLInputElement).value =
          this.bookDetails.author;
      }
    }
  }
  // Method to handle the edit button click and send updated data to the API
  onEdit(): void {
    if (!this.bookId) {
      alert('Book ID is invalid!');
      return;
    }

    const form = document.querySelector('.form') as HTMLFormElement;

    if (form) {
      const updatedBook = {
        id: this.bookId,
        title: (form.querySelector('#title') as HTMLInputElement).value,
        description: (form.querySelector('#description') as HTMLTextAreaElement)
          .value,
        categoryID: parseInt(
          (form.querySelector('#Categoryid') as HTMLSelectElement).value,
          10
        ),
        category: {
          id: 0,
          name: this.categories.find(
            (cat) =>
              cat.id ===
              parseInt(
                (form.querySelector('#Categoryid') as HTMLSelectElement).value,
                10
              )
          )?.name,
        },
        publishedDate: new Date(
          (form.querySelector('#pubdatae') as HTMLInputElement).value
        ).toISOString(),
        author: (form.querySelector('#author') as HTMLInputElement).value,
      };

      fetch(`http://localhost:5107/api/Book/Update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            console.log('Book updated successfully:', data);
            alert('Book updated successfully!');
          } else {
            console.log('Book updated successfully, no content returned.');
          }
        })
        .catch((error) => {
          console.error('Error updating book:', error);
        });
    }
  }

  onDelete(): void {
    console.log('sdfdsfsf');
    if (this.bookId) {
      const confirmDelete = confirm(
        'Are you sure you want to delete this book?'
      );

      if (confirmDelete) {
        fetch(`http://localhost:5107/api/Book/Delete/${this.bookId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then(() => {
            alert('Book deleted successfully!');
            this.router.navigate(['/allBooks']);
          })
          .catch((error) => {
            console.error('Error deleting book:', error);
          });
      }
    } else {
      alert('Book ID is not valid!');
    }
  }
}
