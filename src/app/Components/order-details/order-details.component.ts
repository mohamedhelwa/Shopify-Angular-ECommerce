import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductService } from '../../Services/product.service';
import { ProductsFromApiService } from '../../Services/products-from-api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnChanges {

  ProductListOfSelCat: IProduct[]=[];
  SelectedCategory: number = 1;
  OrderTotalPrice: number = 0;
  OrderDetailsItemCount: { Name: string, Count: number } [] = [];
  
  @Input() InputCategoryID: number = 1;
  @Output() TotalPriceChanged: EventEmitter<number> = new EventEmitter<number> ();

  constructor(//private prdService: ProductService,
              private prdService: ProductsFromApiService,
              private router: Router) { 
   
  }

  ngOnChanges(): void {
    // this.ProductListOfSelCat = this.prdService.getProductsByCatID(this.InputCategoryID);
    // this.SelectedCategory = this.prdService.getSelectedCategory(this.InputCategoryID);
    this.prdService.getProductsByCatID(this.InputCategoryID).subscribe(
      (response) => {
        this.ProductListOfSelCat = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.prdService.getSelectedCategory(this.InputCategoryID).subscribe(
      (response) => {
        this.SelectedCategory = response.id;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

  viewProduct(prodID: number) {
    this.router.navigate(['/productDetails', prodID])
    .then(()=>{
      console.log("Navigation is completed successfully.\nAnd the ProductID = " + prodID);
    })
  }

  CalcTotal(itemPrice: number, itemCount: string, itemName: string) {
    this.OrderTotalPrice += (itemPrice * Number(itemCount));
    this.OrderDetailsItemCount.push({ Name: itemName, Count: Number(itemCount) });
    
    // Firing the event
    this.TotalPriceChanged.emit(this.OrderTotalPrice);  
  }

  UpdateQuantity(itemCount: string) : number{
    return Number(itemCount);
  }
}
