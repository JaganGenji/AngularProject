import { Component,TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrl: './contentprojection.component.css'
})
export class ContentprojectionComponent {
currentView: any;
selectedView: any;

  constructor(){

  }
  public thenblock:TemplateRef<any>|null=null;
  @ViewChild('View1',{static:true}) public View1:TemplateRef<any>|null=null;
  @ViewChild('View2',{static:true}) public View2:TemplateRef<any>|null=null;
  @ViewChild('View3',{static:true}) public View3:TemplateRef<any>|null=null;
  @ViewChild('View4',{static:true}) public View4:TemplateRef<any>|null=null;
  @ViewChild('View5',{static:true}) public View5:TemplateRef<any>|null=null;
  ngOnInit(){
    this.thenblock=this.View1;

  }

  public changeView(viewname:String)
  {
    switch(viewname)
    {
      case 'View1':
        this.thenblock=this.View1;
        break;
      case 'View2':
        this.thenblock=this.View2;
        break;
      case 'View3':
          this.thenblock=this.View3;
          break;
      case 'View4':
            this.thenblock=this.View4;
            break;
      case 'View5':
              this.thenblock=this.View5;
              break;


    }
  }




}
