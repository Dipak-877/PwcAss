import { Component, OnInit } from '@angular/core';
import { services } from '../../shoping-part/shoping-part.services';
import { Router } from "@angular/router";
@Component({
  selector: 'app-remove-shoping',
  templateUrl: './remove-shoping.component.html',
  styleUrls: ['./remove-shoping.component.css']
})
export class RemoveShopingComponent implements OnInit {
  itemCount:number =  1;
  constructor(private cartService: services,private router: Router) { }

  ngOnInit() {
  }

  increaseItem(){
    this.itemCount=this.itemCount+1; 
  }
  decereaseItem(data: any) {
    if(this.itemCount>0) 
      this.itemCount-=1; 
    if(this.itemCount === 0){
      this.removeItem(data);
    }  
  }
  removeItem(data: any) {
    this.cartService.cartItem = this.cartService.cartItem.filter(item=>item !== data);
    this.cartService.removedItemFromCart(this.cartService.cartItem);
  }
  backToshoping(){
    this.router.navigate(['/shoping']);
  }

}
