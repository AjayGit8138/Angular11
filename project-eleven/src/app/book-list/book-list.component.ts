import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = 'Finanacial Books';
  currenttab = 1;
  books: Array<any> = [
    
  ]

    isTabselected(tabindex:number)
    {
      return this.currenttab === tabindex;
    }
    onTabchange(event:any,tabindex:number){
        event.preventDefault();//To stop a flickr screen
        this.currenttab = tabindex;
        console.log("Tab selected" + this.currenttab);
    }
  constructor(private bookserve:StorageService) { }

  ngOnInit(): void {
    this.books = this.bookserve.getBooks();
  }
  onbuy(book:any) {
    console.log('Book Added to the Cart...' + book.name + book.price);
  }

}