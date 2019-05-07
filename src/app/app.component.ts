import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getMessages, getIds, getLoading, getError } from './message/message.reducer';
import { Message } from './message/message.model';
import * as fromActions from './message/message.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newMessage: string = '';
  nextId: string;
  messages: Message[];
  isLoading: boolean;
  error: any;

  constructor(private store: Store<State>) {
    this.store.select(getMessages).subscribe(messages => this.messages = Object.values(messages));
    this.store.select(getIds).subscribe(ids => this.getNextId(Object.values(ids)));
    this.store.select(getLoading).subscribe(isLoading => this.isLoading = isLoading);
    this.store.select(getError).subscribe(error => this.error = error);
  }

  getNextId(keys: Array<string>){
    if(keys && keys.length > 0){
      this.nextId = (parseInt(keys.pop()) + 1).toString();
    }else{
      this.nextId = '0';
    }
  }

  addMessage(){
    this.store.dispatch(new fromActions.AddMessage({message: {id: this.nextId, text: this.newMessage}}));
    this.newMessage = '';
  }

  deleteMessage(id: string){
    this.store.dispatch(new fromActions.DeleteMessage({id: id}));
  }

}
