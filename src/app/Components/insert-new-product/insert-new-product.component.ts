import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesFromApiService } from 'src/app/Services/categories-from-api.service';
import { ProductsFromApiService } from 'src/app/Services/products-from-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from '../../ViewModels/iproduct';

@Component({
  selector: 'app-insert-new-product',
  templateUrl: './insert-new-product.component.html',
  styleUrls: ['./insert-new-product.component.scss']
})
export class InsertNewProductComponent implements OnInit {

  CategoryList: ICategory[] = [];
  SelectedCategoryID: number = 1;
  product: IProduct;

  constructor(private prdService: ProductsFromApiService, 
              private router: Router, 
              private catService: CategoriesFromApiService) { 
    this.product = {
      "id": 0,
      "Name": "",
      "Quantity": 0,
      "Price": 0,
      "Img": "../assets/gloves.png",
      "CategoryID": this.SelectedCategoryID 
    }
  }
  
  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(
      (response) => {
        this.CategoryList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProduct(): void {
    this.prdService.addProduct(this.product).subscribe(
      response => {
        console.log("New Product Added Successfully!");
        this.router.navigate(['/products']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
