import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss']
})
export class ProductCountComponent implements OnInit {

  product: IProduct|any = {};
  prdID: number = 0;
  prdCount: number = 0;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params : ParamMap)=> {  
      let id: string|null = params.get('pID');
      this.prdID = (id)? parseInt(id): 0;
      console.log("id = " + this.prdID);

      let count: string|null = params.get('pCount');
      this.prdCount = (count)? parseInt(count): 0;
      console.log("count = " + this.prdCount);
    }); 
  }

}
