import { Component } from "@angular/core";

 @Component({
  selector:'student',
  template:`<h1> Welcome to angular components</h1>
  <br><hr>
  <dl >
    <dt>Student Id</dt>
    <dd>{{stdid}}</dd>
    <dt>Student Name</dt>
    <dd>{{stdname}}</dd>
    <dt>Student marks :</dt>
    <dd>{{stdmarks}}</dd>
    <dt>Result is </dt>
    <dd>{{stdResult==true?"Pass":"Fail"}}</dd>
  </dl>`
  ,
  styles: [
    `h1 { color: blue; }`

  ]
})



export class StudentComponent{
  stdid:number=101;
  stdname:string="Rahul";
  stdmarks:number=87;
  stdResult:boolean=true;
}
