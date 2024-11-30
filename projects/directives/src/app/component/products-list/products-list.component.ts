import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  public category:string='Electronics';
  public Emloyee:{Eno:number;Ename:String;ESalary:number}[]=[
    {
      Eno:1,
      Ename:'Rahul',
      ESalary:5000
    },
    {
      Eno:2,
      Ename:'Rohan',
      ESalary:6000
    },
    {
      Eno:3,
      Ename:'pavan',
      ESalary:7000
    },
    {
      Eno:1,
      Ename:'Rahul',
      ESalary:5000
    },
    {
      Eno:2,
      Ename:'Rohan',
      ESalary:6000
    },
    {
      Eno:3,
      Ename:'pavan',
      ESalary:7000
    }
  ];
  public product: String[]=[] ;
  public menu:{category:String,products:String[]}[]=[
    {category:"Electronics",products:["Laptop","Mobile","Tablet","iphone"]},
    {category:"Fashion",products:["Shirt","Pant","Shoes"]},
    {category:"Home",products:["Bed","Table","Chair"]},


  ];

  ngOnInit()
  {
    this.loaddata();
  }
  public loaddata(){
    for(let item of this.menu)
    {
      if(item.category==this.category)
      {
        this.product=item.products;
      }
    }
  }

  public oncategories()
  {
    this.loaddata();
  }

}
