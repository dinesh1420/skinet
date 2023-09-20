<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component,Input } from '@angular/core';
>>>>>>> e1651bc75cd962caae43389539023ec400308559
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Product;

}
