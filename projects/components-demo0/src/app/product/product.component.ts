import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
proName:string="Iphone";
proPrice:number=50000;
ProImage:string="data:image/jpeg;base64,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";
inStock:boolean=false;
}