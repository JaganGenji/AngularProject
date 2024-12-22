import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
public messagFroChild:string="";
public message:string="Message from Student";
public details:string[]=["Jagan","Thanvika","Bhavishaya"];
public MessageFromChild(e:any)
{
this.messagFroChild=e;

}

}
