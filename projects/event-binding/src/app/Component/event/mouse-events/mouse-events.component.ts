import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrl: './mouse-events.component.css'
})
export class MouseEventsComponent {
public black:string='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMwUi28MVaUT5bpS66phUQ9v7M_C6tvJ6YnnfOVtH_kgrhRtH6zPxJ_Kn2xz4UxaZCPsogm40xnjILNbcStl3x6uYntumy4Bhws252E1qmY1YxdDehIUTeAQ';
public gold:string='https://m.media-amazon.com/images/I/61c4LdHcTAL._AC_UY327_FMwebp_QL65_.jpg';
public green:string='https://m.media-amazon.com/images/I/61ieMdfhmfL._AC_UY327_FMwebp_QL65_.jpg';
public red:string='https://m.media-amazon.com/images/I/71PFhkWn1lL._AC_UY327_FMwebp_QL65_.jpg';
public img_sorce: string='';
public place:{top:string,left:string,position:string}={
top:'0px',
left:'0px',
position:''
}
public Setcolor(color:string)
{
// alert('i am '+color)
switch(color)
{
case 'black':this.img_sorce=this.black;
break;
case 'gold':this.img_sorce=this.gold;
break;
case 'green':this.img_sorce=this.green;
break;
case 'red':this.img_sorce=this.red;
break;

}
}
public Mousemove(e:any)
{
this.place={
top:e.clientY+'px',
left:e.clientX+'px',
position:'absolute'
}
}

}
