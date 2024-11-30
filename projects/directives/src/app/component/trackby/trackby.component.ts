import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrl: './trackby.component.css'
})
export class TrackbyComponent {
  public details:any[]=[
    {id:1,name:'Rahul',age:25},
    {id:2,name:'Ram',age:24},
    {id:3,name:'raju',age:35},
  ]
  Updateddetails(){
    this.details=[
      {id:1,name:'Rahul',age:25},
    {id:2,name:'Ram',age:24},
    {id:3,name:'raju',age:35},
    {id:4,name:'mohan',age:22}

    ]
  }
  Tracker(index:number)
  {
   return index;
  }

}
