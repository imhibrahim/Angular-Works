import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { RoomComponent } from './roomlist/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
