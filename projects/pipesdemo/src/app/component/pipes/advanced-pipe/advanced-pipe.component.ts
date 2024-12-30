import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-pipe',
  templateUrl: './advanced-pipe.component.html',
  styleUrl: './advanced-pipe.component.css'
})
export class AdvancedPipeComponent {
public products:{name:string,shipedTo:string}[]=[
{name:'Iphone',shipedTo:'Hyd'},
{name:'mi',shipedTo:'Banglore'},
{name:'samsung',shipedTo:'Pune'},
{name:'redmi',shipedTo:'Mumbai'},
{name:'oppo',shipedTo:'Chennai'},
{name:'vivo',shipedTo:'Kolkatta'}

]
public status:any={
'Hyd':' Delevered in one day',
'Banglore':'Develered in 4 days',
'Pune':'Delevered in 3 days',
'Mumbai':'Delevered in 2 days',
'Chennai':'Delevered in 5 days',
'Kolkatta':'Delevered in 6 days',
'other':'usaully dispatched in  5 days'

}

}
