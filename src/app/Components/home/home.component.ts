import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../ViewModels/iproduct';
import { ProductsFromApiService } from '../../Services/products-from-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: IProduct[] = [];
  itemLink: any;

  constructor(private productService: ProductsFromApiService) { 
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.productList = response;
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  viewProduct(prodID: number) {
    this.itemLink = `/productDetails/${prodID}`;
  }
}
