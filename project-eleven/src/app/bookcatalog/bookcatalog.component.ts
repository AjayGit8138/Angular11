import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-bookcatalog',
  templateUrl: './bookcatalog.component.html',
  styleUrls: ['./bookcatalog.component.css']
})
export class BookcatalogComponent implements OnInit {
  books: Array<any> = [];
 
  constructor(private bookserv:StorageService) { }

  ngOnInit(): void {
    this.books = this.bookserv.getBooks();
    console.log(this.books);
   }

}
