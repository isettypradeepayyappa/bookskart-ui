import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './books-home/all-books/all-books.component';
import { BookInfoComponent } from './books-home/book-info/book-info.component';
import { BooksHomeComponent } from './books-home/books-home.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'books-home',
    component: BooksHomeComponent,
    children: [{
      path: '',
      redirectTo: '/books-home/all-books',
      pathMatch: 'full'
    },{
      path: 'all-books',
      component: AllBooksComponent
    },{path: 'book-info/:id',
    component: BookInfoComponent}]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
