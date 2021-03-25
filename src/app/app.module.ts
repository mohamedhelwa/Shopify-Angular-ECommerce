import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from "@angular/forms";
import { ShadowBorderDirective } from './Directives/shadow-border.directive';
import { ValidateInputDirective } from './Directives/validate-input.directive';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { CreditNumberPipe } from './Pipes/credit-number.pipe';
import { EgyIDPipe } from './Pipes/egy-id.pipe';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductCountComponent } from './Components/product-count/product-count.component';
import { HttpClientModule } from "@angular/common/http";
import { NewProductComponent } from './Components/new-product/new-product.component';
import { InsertNewProductComponent } from './Components/insert-new-product/insert-new-product.component';
import { LoginComponent } from './Components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    ShadowBorderDirective,
    ValidateInputDirective,
    ShoppingCartComponent,
    CreditNumberPipe,
    EgyIDPipe,
    OrderMasterComponent,
    OrderDetailsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductCountComponent,
    NewProductComponent,
    InsertNewProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
