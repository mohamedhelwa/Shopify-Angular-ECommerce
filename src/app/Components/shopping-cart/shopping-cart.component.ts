import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  PurchaseDate: Date;

  constructor() { 
    this.PurchaseDate = new Date();
  }

  ngOnInit(): void {
  }

}
