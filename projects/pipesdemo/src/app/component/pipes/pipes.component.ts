import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
 name:string="hello I am leaRning PipEs";
rate:number=0.5;
det:{nam:String,age:number}={
  nam: 'jagan',
  age: 23
}
category:string[]=['glossary','clothing','watches','shirts'];
todayDate:Date=new Date();
Rate:number=1500;

}
