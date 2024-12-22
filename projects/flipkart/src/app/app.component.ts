import { join } from 'node:path';
import { Component } from '@angular/core';
import { ProductDetais } from './product.contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public categories:string[]=[];
  public products:ProductDetais[]=[];
  public cartItem:ProductDetais[]=[];
  public cartItemsNo:number=0;
  public isCartVisible:boolean=false;
  ngOnInit(){
    this.LoadCategories();
    this.GetProducts();

  }
  public LoadCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(data=>data.json())
    .then(data=>{
      this.categories=data;
    })
  }
  public CategoryChange(categoryName:string)
  {
    if(categoryName=="all")
    {
      fetch('https://fakestoreapi.com/products')
  .then(data=>data.json())
  .then(data=>{
    this.products=data;
  })
    }
    else{
    fetch('https://fakestoreapi.com/products/category/'+categoryName)
    .then(data=>data.json())
    .then(data=>{
      this.products=data;
    })

  }
}

  public ToggleCartItems(){
    this.isCartVisible=this.isCartVisible==true?false:true;


  }
public RemoveCartItem(i:number)
{
  var flag=confirm('Do you want to remove from cart?');
  if(flag==true)
  {
    this.cartItem.splice(i,1);
    this.cartItemsNo=this.cartItem.length;

  }
}
public GetProducts()
{
  fetch('https://fakestoreapi.com/products')
  .then(data=>data.json())
  .then(data=>{
    this.products=data;
  })

}
public AddToCart(id:number){

fetch('https://fakestoreapi.com/products/'+id)
.then(data=>data.json())
.then(data=>{
  this.cartItem.push(data);
  // this.cartItemsNo=this.cartItemsNo+1;
  this.cartItemsNo=this.cartItem.length;
  alert(data.title+"Added to Cart");
})
}

}
