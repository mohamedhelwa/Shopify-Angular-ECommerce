import { Component, OnInit } from '@angular/core';

import { DiscountOffers } from '../../ViewModels/discount-offers.enum';
import { Store } from "../../ViewModels/store";
import { ICategory } from '../../ViewModels/icategory';
import { IProduct } from '../../ViewModels/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  Discount: DiscountOffers;
  store: Store;
  ClientName: string;
  CategoryList: ICategory[];
  ProductList: IProduct[];
  SelectedCategory: number;
  IsPurchased: boolean;

  CCNumber: string;
  NationalID: string;

  constructor() { 
    this.Discount = DiscountOffers.discount10;
    this.store = new Store("Shopify", ["Cairo", "Giza", "Alex"], "../../../assets/store-logo.png");
    this.ClientName = "";
    this.SelectedCategory = 0;
    this.IsPurchased = true;

    this.CCNumber = "";
    this.NationalID = "39912034000111";

    
    this.CategoryList = [
      {
        id: 1,
        Name: "Mobiles"
      },
      {
        id: 2,
        Name: "Tablets"
      },
      {
        id: 3,
        Name: "Laptops"
      },
      {
        id: 4,
        Name: "Clothes"
      },
      {
        id: 5,
        Name: "Sports"
      }
    ];
    
    this.ProductList = [
      {
        id: 9991,
        Name: "iPhone XS",
        Quantity: 7,
        Price: 10000,
        Img: "../../../assets/iphone-x.png",
        CategoryID: 1
      },
      {
        id: 9992,
        Name: "Samsung S10",
        Quantity: 3,
        Price: 8000,
        Img: "../../../assets/samsungS10.png",
        CategoryID: 1
      },
      {
        id: 9993,
        Name: "Nokia 1110",
        Quantity: 3,
        Price: 1000,
        Img: "../../../assets/nokia1110.png",
        CategoryID: 1
      },
      {
        id: 8881,
        Name: "IPad Pro",
        Quantity: 5,
        Price: 15000,
        Img: "../../../assets/IPad.png",
        CategoryID: 2
      },
      {
        id: 8882,
        Name: "Samsung Tab",
        Quantity: 15,
        Price: 9500,
        Img: "../../../assets/SamsungTab.png",
        CategoryID: 2
      },
      {
        id: 8883,
        Name: "Lenovo Tablet",
        Quantity: 2,
        Price: 6000,
        Img: "../../../assets/lenovoTab.png",
        CategoryID: 2
      },
      {
        id: 7771,
        Name: "MacBook Air",
        Quantity: 9,
        Price: 20000,
        Img: "../../../assets/MacBookAir.png",
        CategoryID: 3
      },
      {
        id: 7772,
        Name: "Dell Laptop",
        Quantity: 6,
        Price: 12500,
        Img: "../../../assets/DellLaptop.png",
        CategoryID: 3
      },
      {
        id: 7773,
        Name: "Lenovo ThinkPad",
        Quantity: 20,
        Price: 8499,
        Img: "../../../assets/LenovoLaptop.png",
        CategoryID: 3
      },
      {
        id: 6661,
        Name: "T-Shirt",
        Quantity: 20,
        Price: 399,
        Img: "../../../assets/tshirt.png",
        CategoryID: 4
      },
      {
        id: 6662,
        Name: "Sweatshirt",
        Quantity: 1,
        Price: 250,
        Img: "../../../assets/Sweatshirt.png",
        CategoryID: 4
      },
      {
        id: 6663,
        Name: "Pants",
        Quantity: 16,
        Price: 200,
        Img: "../../../assets/pants.png",
        CategoryID: 4
      },
      {
        id: 5551,
        Name: "Fitness Belts",
        Quantity: 1,
        Price: 75,
        Img: "../../../assets/Fitness Belts.png",
        CategoryID: 5
      },
      {
        id: 5552,
        Name: "Gym Gloves",
        Quantity: 10,
        Price: 50,
        Img: "../../../assets/gloves.png",
        CategoryID: 5
      },
      {
        id: 5553,
        Name: "Jump Ropes",
        Quantity: 4,
        Price: 20,
        Img: "../../../assets/rope.png",
        CategoryID: 5
      }
    ];
    
  }

  GetSelectedCategory(categoryName: number){
    this.SelectedCategory = categoryName;
    console.log(categoryName);
  }

  Buy() {
    this.IsPurchased = !this.IsPurchased;
  }
  ngOnInit(): void {
  }

}
