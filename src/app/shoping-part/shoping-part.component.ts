import { Component, OnInit } from '@angular/core';
import { services } from './shoping-part.services';
import { shoping } from './shopingPart.model';



@Component({
  selector: 'app-shoping-part',
  templateUrl: './shoping-part.component.html',
  styleUrls: ['./shoping-part.component.css']
})
export class ShopingPartComponent implements OnInit {
  shopingcart: shoping[];
  data: shoping[]; 
  constructor(private services: services) { }

  ngOnInit() {
    

  }

  addToCart (data: object){
    this.services.addItemToCart(data);
  }


}
