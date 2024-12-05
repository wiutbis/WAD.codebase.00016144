import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'allBooks', component: AllBooksComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: '**', redirectTo: '/add' },
];
