import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
>>>>>>> e1651bc75cd962caae43389539023ec400308559



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule,
    SharedModule
=======
    CommonModule
>>>>>>> e1651bc75cd962caae43389539023ec400308559
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
