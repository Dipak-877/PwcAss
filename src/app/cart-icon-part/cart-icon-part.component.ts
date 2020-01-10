import { Component, OnInit } from '@angular/core';
import { services } from '../shoping-part/shoping-part.services';
import { Router } from "@angular/router";
@Component({
  selector: 'app-cart-icon-part',
  templateUrl: './cart-icon-part.component.html',
  styleUrls: ['./cart-icon-part.component.css']
})
export class CartIconPartComponent implements OnInit {
  cartItem: any;
  
  constructor(private cartService: services,private router: Router) { }

  ngOnInit() {
    // this.cartItemthis.cartService.addItemToCart()
  }
  newChange() {
    this.router.navigate(['/remove']);
    
}

}
