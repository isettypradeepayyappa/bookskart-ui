import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {
tabs=[{tabName:"All books",url:"/books-home/all-books"},{tabName:"Old Books",url:"/oldBooks"},{tabName:"Fiction Books",url:"/fictionBooks"}]
  constructor() { }

  ngOnInit(): void {

  }

}
