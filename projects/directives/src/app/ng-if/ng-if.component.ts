import { Component } from '@angular/core';
import { ProductDetais } from '../contract/product.contract';
import { response } from 'express';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  public details:ProductDetais={
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
  ngOnInit(){
    fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(response=>{
      this.details=response
    } )
  }

}
