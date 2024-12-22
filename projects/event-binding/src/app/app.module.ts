import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './Component/event/event.component';
import { MouseEventsComponent } from './Component/event/mouse-events/mouse-events.component';
import { FormsModule } from '@angular/forms';
import { KeyboardEventComponent } from './Component/event/keyboard-event/keyboard-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    MouseEventsComponent,
    KeyboardEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [KeyboardEventComponent]
})
export class AppModule { }
