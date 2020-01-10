import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadrePartComponent } from './headre-part/headre-part.component';
import { SearchPartComponent } from './search-part/search-part.component';
import { CartIconPartComponent } from './cart-icon-part/cart-icon-part.component';
import { SortPartComponent } from './sort-part/sort-part.component';
import { FilterPartComponent } from './filter-part/filter-part.component';
import { ShopingPartComponent } from './shoping-part/shoping-part.component';
import { services } from './shoping-part/shoping-part.services';
import { FormsModule }    from '@angular/forms';
import { RemoveShopingComponent } from './shoping-part/remove-shoping/remove-shoping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadrePartComponent,
    SearchPartComponent,
    CartIconPartComponent,
    SortPartComponent,
    FilterPartComponent,
    ShopingPartComponent,
    RemoveShopingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule { }
