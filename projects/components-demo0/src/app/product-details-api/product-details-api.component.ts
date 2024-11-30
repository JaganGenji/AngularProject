import { ProductComponent } from './../product/product.component';
import { ProductDetais } from './../contract/product.contract';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-api',
  templateUrl: './product-details-api.component.html',
  styleUrl: './product-details-api.component.css'
})
export class ProductDetailsApiComponent {

 public details: ProductDetais  ={
   id: 0,
   title: '',
   price: 0,
   description: '',
   category: '',
   image: '',
   rating: {
     rate: 0,
     count: 0
   }
 }
GetProductDetails (id :number)
{
  fetch('https://fakestoreapi.com/products/'+id)
  .then(response => response.json())
  .then(data => this.details = data)

}
count:number=1;
ngOnInit(){
  this.GetProductDetails(1);

}
previousClick()
{this.count=this.count-1;
  this.GetProductDetails(this.count);
}
NextClick()
{this.count=this.count+1;
  this.GetProductDetails(this.count);
}

  }



