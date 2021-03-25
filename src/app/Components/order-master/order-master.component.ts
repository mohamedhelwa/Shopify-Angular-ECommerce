import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ICategory } from '../../ViewModels/icategory';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { CategoriesFromApiService } from '../../Services/categories-from-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})

export class OrderMasterComponent implements OnInit, AfterViewInit, OnDestroy {

  CategoryList: ICategory[] = [];
  SelectedCategoryID: number = 1;
  OutPutTotalPrice: number = 0;
  BoughtItemsDetails: { Name: string, Count: number } [] = [];

  private subscriptionList: Subscription[] = [];

  @ViewChild ('SelectItem') SelectItem: ElementRef = new ElementRef('select');
  @ViewChild (OrderDetailsComponent) childComponent: any;

  constructor(private catService: CategoriesFromApiService) { }
  
  ngOnInit(): void {
    let catSubscription = this.catService.getAllCategories().subscribe(
      (response) => {
        this.CategoryList = response;
      },
      (error) => {
        console.log(error);
      }
    );
    
    this.subscriptionList.push(catSubscription);
  }

  onTotalPriceChanged(totalPrice: number) {
    this.OutPutTotalPrice = totalPrice;
  }

  ngAfterViewInit(): void {
    this.SelectItem.nativeElement.style.color = "red";
    this.SelectItem.nativeElement.style.fontFamily = "monospace";
        
    this.BoughtItemsDetails = this.childComponent.OrderDetailsItemCount; 
  }


  ngOnDestroy(): void {
    for(let sub of this.subscriptionList) {
      sub.unsubscribe();
    }
  }
}
