import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../ViewModels/iproduct';
import { ProductsFromApiService } from '../../Services/products-from-api.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/ViewModels/icategory';
import { CategoriesFromApiService } from 'src/app/Services/categories-from-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {


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

  addProduct(prod: IProduct): void {
    this.prdService.addProduct(prod).subscribe(
      (response) => {
        this.product = response;
        console.log("New Product Added Successfully!");
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
