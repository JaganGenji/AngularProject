import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentComponent} from './StudentComponemt'
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsApiComponent } from './product-details-api/product-details-api.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    ProductComponent,
    ProductDetailsApiComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [   ProductDetailsApiComponent
  ]
})
export class AppModule { }
