import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { AdvancedPipeComponent } from './component/pipes/advanced-pipe/advanced-pipe.component';
import { CustomPipesComponent } from './component/custom-pipes/custom-pipes.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  declarations: [

    PipesComponent,
          AdvancedPipeComponent,
          CustomPipesComponent,
ReversePipe,
GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [CustomPipesComponent]
})
export class AppModule { }
