import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmpformComponent } from './empform/empform.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookformComponent } from './bookform/bookform.component';
import { BookcatalogComponent } from './bookcatalog/bookcatalog.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { TabComponent } from './tab/tab.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { PcrformComponent } from './pcrform/pcrform.component';
import { TableViewComponent } from './table-view/table-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FormsDemoComponent,
    EmpformComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LinksComponent,
    ProductComponent,
    BookformComponent,
    BookcatalogComponent,
    BookComponent,
    BookListComponent,
    TabComponent,
    PriceDiscountPipe,
    PcrformComponent,
    TableViewComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, NgbModule,FormsModule,BrowserAnimationsModule,MatButtonModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
