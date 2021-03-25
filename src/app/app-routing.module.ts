import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductCountComponent } from './Components/product-count/product-count.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { InsertNewProductComponent } from './Components/insert-new-product/insert-new-product.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: OrderMasterComponent },
  { path: "productDetails/:pID", component: ProductDetailsComponent },
  { path: "productDetails/:pID/:pCount", component: ProductCountComponent },
  { path: "admin/insertProduct", component: NewProductComponent},
  { path: "admin/insertNewProduct", component: InsertNewProductComponent},
  { path: "login", component: LoginComponent},
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
