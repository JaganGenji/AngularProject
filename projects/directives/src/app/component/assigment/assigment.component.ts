import { Component } from '@angular/core';
import { ProductDetais } from '../../contract/product.contract';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrl: './assigment.component.css'
})
export class AssigmentComponent {
  public product:ProductDetais[]=[];
  ngOnInit(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => this.product=data)
  }

}
