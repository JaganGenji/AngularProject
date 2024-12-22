import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() public messtagefromParent:string="";
@Input() public information:string[]=[];


@Output() public childclick:EventEmitter<string>=new EventEmitter<string>();

public parentdata(){
this.childclick.emit("Message from the children");
}

}
