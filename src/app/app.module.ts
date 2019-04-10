import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromMessage from './message/message.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from './message/message.effects';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('message', fromMessage.reducer),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([MessageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
