import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-event',
  templateUrl: './keyboard-event.component.html',
  styleUrl: './keyboard-event.component.css'
})
export class KeyboardEventComponent {
public usernames:any[]=[{username:'jagan'},
{username:'sai'},
{username:'sri'},
{username:'hello'}];
public usermessage:string=';'
public ispresent:boolean=false;
public uservalidation(e:any)
{
for(var user of this.usernames)
{
if(e.target.value==user.username)
{
this.ispresent=true;
this.usermessage='user is already taken';
break;
}
else{
this.ispresent=false;
this.usermessage='user is available ...';
break;
}

}
}
}
