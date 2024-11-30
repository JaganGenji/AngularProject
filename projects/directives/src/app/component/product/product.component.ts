import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public ViewName:String="details";
  public ViewClick(viewname:string)
  {
   this.ViewName=viewname;
  }

}