import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsFromApiService {

  private SelectedCategory: number = 1;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable <IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.API_URL}/products`);
  }

  getProductsByCatID(CatID: number): Observable <IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.API_URL}/products?CategoryID=${CatID}`)
  }

  getProductByID(ProdID: number): Observable <IProduct> {
    return this.http.get<IProduct>(`${environment.API_URL}/products/${ProdID}`);
  }

  getSelectedCategory(categoryID: number): Observable <ICategory> {
    return this.http.get<ICategory>(`${environment.API_URL}/categories/${categoryID}`)
  }

  addProduct(product: IProduct): Observable <IProduct> {
    return this.http.post<IProduct>(`${environment.API_URL}/products`, product);
  }
}
