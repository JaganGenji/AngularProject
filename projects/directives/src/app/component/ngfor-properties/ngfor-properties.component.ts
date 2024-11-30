import { Component } from '@angular/core';
import { ProductDetais } from '../../contract/product.contract';

@Component({
  selector: 'app-ngfor-properties',
  templateUrl: './ngfor-properties.component.html',
  styleUrl: './ngfor-properties.component.css'
})
export class NgforPropertiesComponent {
  public product:ProductDetais[]=[];
  ngOnInit(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => this.product=data)

  }

}
