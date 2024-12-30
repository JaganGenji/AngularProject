import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})
export class CustomPipesComponent {
st:string="Hello welcome";
public data:{eid:number,name:string,gender:string}[]=[{ eid:100,name:'jagan',gender:'male'},
{ eid:101,name:'sai',gender:'female'},
{ eid:102,name:'kiran',gender:'male'},
{ eid:103,name:'sri',gender:'female'},
{ eid:104,name:'sai',gender:'male'},
{ eid:105,name:'sri',gender:'female'},
{ eid:106,name:'kiran',gender:'male'},
{ eid:107,name:'sai',gender:'female'},
{ eid:108,name:'kiran',gender:'male'},

]
public Delete(i:any)
{
this.data.splice(i,1);
}
public addData()
{
}

}
