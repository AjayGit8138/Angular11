import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookcatalogComponent } from './bookcatalog/bookcatalog.component';
import { ContactComponent } from './contact/contact.component';
import { EmpformComponent } from './empform/empform.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'Home',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Product',component:ProductComponent},
  {path:'Product/:id/:name',component:ProductComponent},
  {path:'empform',component:EmpformComponent},
  {path:'books',component:BookcatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
