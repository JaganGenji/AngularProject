import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {


  public Background:String="red";
  public Textcolr:String="green";
  public fontsize:String="10";
  public padding:String="0";
  public textalin:String="center";

  public styleObj:{'background-color':String,'color':String,'font-size':String,'padding':String ,'text-align':String}={
    'background-color': this.Background,
    color: this.Textcolr,
    'font-size': this.fontsize + "px",
    padding: this.padding + "px",
    'text-align': this.textalin
  }
names: String="";
  ApplyStryles() {
    this.styleObj={
      'background-color': this.Background,
      color: this.Textcolr,
      'font-size': this.fontsize+'px',
      padding: this.padding+'px','text-align': this.textalin
    }
    }
    changebackground(){
      this.styleObj={ 'background-color': this.Background,
      color: this.Textcolr,
      'font-size': this.fontsize+'px',
      padding: this.padding+'px',
      'text-align': this.textalin};
    }
    changeTextColor(){
      this.styleObj={ 'background-color': this.Background,
      color: this.Textcolr,
      'font-size': this.fontsize+'px',
      padding: this.padding+'px',
      'text-align': this.textalin};
    }
    changefontSize(){
      this.styleObj={ 'background-color': this.Background,
      color: this.Textcolr,
      'font-size': this.fontsize+'px',
      padding: this.padding+'px',
      'text-align': this.textalin};
    }
    changePadding(){
      this.styleObj={ 'background-color': this.Background,
      color: this.Textcolr,
      'font-size': this.fontsize+'px',
      padding: this.padding+'px',
      'text-align': this.textalin};
    }

}
