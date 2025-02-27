import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { ContentprojectionComponent } from './component/contentprojection(ngifThen)/contentprojection.component';
import { ProductComponent } from './component/product/product.component';
import { NgForDemoComponent } from './component/ng-for-demo/ng-for-demo.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { NgforPropertiesComponent } from './component/ngfor-properties/ngfor-properties.component';
import { TrackbyComponent } from './component/trackby/trackby.component';
import { AssigmentComponent } from './component/assigment/assigment.component';
import { ClassBindingComponent } from './component/class-binding/class-binding.component';
import { StyleBindingComponent } from './component/style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    ContentprojectionComponent,
    ProductComponent,
    NgForDemoComponent,
    ProductsListComponent,
    NgforPropertiesComponent,
    TrackbyComponent,
    AssigmentComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [StyleBindingComponent]
})
export class AppModule { }
