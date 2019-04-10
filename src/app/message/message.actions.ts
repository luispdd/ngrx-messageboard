import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Message } from './message.model';

export enum MessageActionTypes {
  LoadMessages = '[Message] Load Messages',
  AddMessage = '[Message] Add Message',
  AddMessageSuccess = '[Message] Add Message Success',
  AddMessageError = '[Message] Add Message Error',
  DeleteMessage = '[Message] Delete Message',
  DeleteMessageSuccess = '[Message] Delete Message Success',
  DeleteMessageError = '[Message] Delete Message Error',
}

export class LoadMessages implements Action {
  readonly type = MessageActionTypes.LoadMessages;

  constructor(public payload: { messages: Message[] }) {}
}

export class AddMessage implements Action {
  readonly type = MessageActionTypes.AddMessage;

  constructor(public payload: { message: Message }) {}
}

export class AddMessageSuccess implements Action {
  readonly type = MessageActionTypes.AddMessageSuccess;
}

export class AddMessageError implements Action {
  readonly type = MessageActionTypes.AddMessageError;

  constructor(public payload: { error: any }) {}
}

export class DeleteMessage implements Action {
  readonly type = MessageActionTypes.DeleteMessage;

  constructor(public payload: { id: string }) {}
}

export class DeleteMessageSuccess implements Action {
  readonly type = MessageActionTypes.DeleteMessageSuccess;
}

export class DeleteMessageError implements Action {
  readonly type = MessageActionTypes.DeleteMessageError;

  constructor(public payload: { error: any }) {}
}


export type MessageActions =
 LoadMessages
 | AddMessage
 | AddMessageSuccess
 | AddMessageError
 | DeleteMessage
 | DeleteMessageSuccess
 | DeleteMessageError;