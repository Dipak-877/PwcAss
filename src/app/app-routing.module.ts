import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoveShopingComponent } from './shoping-part/remove-shoping/remove-shoping.component';
import { ShopingPartComponent } from './shoping-part/shoping-part.component';

const routes: Routes = [
  { path: 'remove', component: RemoveShopingComponent },
  { path: 'shoping', component: ShopingPartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
