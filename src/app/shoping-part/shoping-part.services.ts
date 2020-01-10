import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { shoping } from './shopingPart.model';
import { Observable } from 'rxjs';



//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class services  {
  apiURL: string = 'https://api.myjson.com/bins/qzuzi';

  cartItem: any[] = [];

  listItem: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.getItemList();
  }

  getShoping(): Observable<HttpResponse<shoping[]>> {
    return this.httpClient.get<shoping[]>(
        this.apiURL, { observe: 'response' });
  }
  getItemList(){
    this.getShoping().subscribe((shopingcart)=>{
      this.listItem = shopingcart.body;
    });
  }
  addItemToCart(data: any) {
    this.cartItem.push(data);
  }

  removedItemFromCart(data: any){
    this.cartItem = data;
  }

  onSearch (keywords: any) {
    
  }
}
