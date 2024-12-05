import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from Angular's core
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ensure RouterModule is in the imports array
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  categories: { id: number; name: string }[] = []; // Array to store categories

  constructor(private router: Router) {
    // Example static categories (replace with actual API if needed)
    this.fetchCategories();
  }

  fetchCategories() {
    fetch('http://localhost:5107/api/Category/Get') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        this.categories = data; // Assuming the response is an array of categories
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }

  // Handle form submission
  onSubmit(
    titleInput: HTMLInputElement,
    descriptionInput: HTMLTextAreaElement,
    categoryInput: HTMLSelectElement,
    publishedDateInput: HTMLInputElement,
    authorInput: HTMLInputElement
  ) {
    const bookData = {
      title: titleInput.value,
      description: descriptionInput.value,
      categoryID: categoryInput.value, // Selected category ID
      author: authorInput.value,
      publishedDate: publishedDateInput.value,
    };

    console.log('Form submitted:', bookData);

    // Send POST request to API
    fetch('http://localhost:5107/api/Book/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book added successfully:', data);

        this.router.navigate(['/allBooks']);
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  }
}
