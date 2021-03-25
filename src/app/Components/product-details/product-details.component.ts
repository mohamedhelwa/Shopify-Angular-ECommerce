import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../ViewModels/iproduct';
import { ProductsFromApiService } from '../../Services/products-from-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct|any = {};
  prdID: number = 0;

  nextPrd: IProduct|any = {};
  private sub: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, 
              // private prdServ: ProductService,
              private prdService: ProductsFromApiService,
              private location: Location) { }

  ngOnInit(): void {
    let productIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('pID');
    this.prdID = (productIDParam)? parseInt(productIDParam): 0;
    // this.product = this.prdService.getProductByID(this.prdID);

    this.prdService.getProductByID(this.prdID).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.activatedRoute.paramMap.subscribe((params : ParamMap)=> {  
      let id: string|null = params.get('pID');
      this.prdID = (id)? parseInt(id): 0;

      // this.nextPrd = this.prdService.getProductByID(this.prdID);

      this.prdService.getProductByID(this.prdID).subscribe(
        (response) => {
          this.nextPrd = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }); 
  }

  goBack() {
    this.location.back();
  }

  nextProduct() {
    // if(this.prdServ.getProductByID((this.nextPrd).id + 1) != null) {
    //   this.router.navigate(['/productDetails', ((this.nextPrd).id + 1)]);
    //   this.product = this.prdServ.getProductByID(((this.nextPrd).id + 1));
    // }
    
    
    
    this.sub = this.prdService.getProductByID((this.nextPrd).id).subscribe(
      (response) => {
        if((response.id + 1) != null) {
          this.router.navigate(['/productDetails', ((this.nextPrd).id + 1)]);
    
          this.prdService.getProductByID((this.nextPrd).id + 1).subscribe(
            (response) => {
              this.product = response;
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );

  }

  previousProduct() {
    // if(this.prdServ.getProductByID((this.nextPrd).id - 1) != null) {
    //   this.router.navigate(['/productDetails', ((this.nextPrd).id - 1)]);
    //   this.product = this.prdServ.getProductByID(((this.nextPrd).id - 1));
    // }

    this.prdService.getProductByID((this.nextPrd).id).subscribe(
      (response) => {
        if((response.id - 1) != null) {
          this.router.navigate(['/productDetails', ((this.nextPrd).id - 1)]);
    
          this.prdService.getProductByID((this.nextPrd).id - 1).subscribe(
            (response) => {
              this.product = response;
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );    
  }
}
