import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
cards=[{id:1,bookTitle:"Harry Potter and the Philosopher's Stone",authorName:"J.K.Rowling",bookPrice:1500, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-1-9d57cdddd45b0d0d0d188c01621656aa.png.webp"},
{id:2,bookTitle:"Harry Potter and the Chamber of Secrets",authorName:"J.K.Rowling",bookPrice:850, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-2-2aa257d796327ebf5435c99f4ef08b2c.png.webp"},
{id:3,bookTitle:"Harry Potter and the Prisoner of Azkaban",authorName:"J.K.Rowling",bookPrice:1050, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-3-bcc3d07e2e85f98278a44fb0210df3fc.png.webp"},
{id:4,bookTitle:"Harry Potter and the Goblet of Fire",authorName:"J.K.Rowling",bookPrice:650, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-4-633c39dfbd17fbf53eb5d77abf98c719.png.webp"},
{id:5,bookTitle:"Harry Potter and the Order of the Phoenix",authorName:"J.K.Rowling",bookPrice:895, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-5-25432dd08ecfa5368520c37167201f43.png.webp"},
{id:6,bookTitle:"Harry Potter and the Half-Blood Prince",authorName:"J.K.Rowling",bookPrice:880, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-6-2a2ff3752f1010435d6a2c5442188c74.png.webp"},
{id:7,bookTitle:"Harry Potter and the Deathly Hallows",authorName:"J.K.Rowling",bookPrice:1400, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-7-3247950c7a713ac780f1e069ca7f6ff3.png.webp"},
{id:8,bookTitle:"Harry Potter and the Cursed Child - Parts One and Two",authorName:"J.K.Rowling",bookPrice:1300, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-8-8afc95c0ac89a719786d2f471c40b53a.png.webp"},
{id:9,bookTitle:"Fantastic Beasts and Where to Find Them",authorName:"J.K.Rowling",bookPrice:750, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-11-ef1a489ee819019841e405fa71ffe932.png.webp"},
{id:10,bookTitle:"Fantastic Beasts: The Crimes of Grindelwald",authorName:"J.K.Rowling",bookPrice:1500, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-10-e0e160d6b224ade3478dda4ee519adbf.png.webp"},
{id:11,bookTitle:"Fantastic Beasts and Where to Find Them",authorName:"J.K.Rowling",bookPrice:950, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-9-6dc52ba78d687348215ad1a0e0abb988.png.webp"},
{id:12,bookTitle:"Quidditch Through the Ages",authorName:"J.K.Rowling",bookPrice:890, image:"https://www.wizardingworld.com/assets/_next/static/images/rectangle-12-f6c8b58e48e343fe9a8b34e72ddc372d.png.webp"},]
  constructor(private router: Router) { }
  bookInfo(bookid:any){
    console.log(bookid);
this.router.navigate(['books-home/book-info', bookid])

  }
  ngOnInit(): void {
  }

}
