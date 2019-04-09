import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromMessage from './message/message.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('message', fromMessage.reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
