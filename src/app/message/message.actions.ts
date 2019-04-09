import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Message } from './message.model';

export enum MessageActionTypes {
  LoadMessages = '[Message] Load Messages',
  AddMessage = '[Message] Add Message',
  UpsertMessage = '[Message] Upsert Message',
  AddMessages = '[Message] Add Messages',
  UpsertMessages = '[Message] Upsert Messages',
  UpdateMessage = '[Message] Update Message',
  UpdateMessages = '[Message] Update Messages',
  DeleteMessage = '[Message] Delete Message',
  DeleteMessages = '[Message] Delete Messages',
  ClearMessages = '[Message] Clear Messages'
}

export class LoadMessages implements Action {
  readonly type = MessageActionTypes.LoadMessages;

  constructor(public payload: { messages: Message[] }) {}
}

export class AddMessage implements Action {
  readonly type = MessageActionTypes.AddMessage;

  constructor(public payload: { message: Message }) {}
}

export class UpsertMessage implements Action {
  readonly type = MessageActionTypes.UpsertMessage;

  constructor(public payload: { message: Message }) {}
}

export class AddMessages implements Action {
  readonly type = MessageActionTypes.AddMessages;

  constructor(public payload: { messages: Message[] }) {}
}

export class UpsertMessages implements Action {
  readonly type = MessageActionTypes.UpsertMessages;

  constructor(public payload: { messages: Message[] }) {}
}

export class UpdateMessage implements Action {
  readonly type = MessageActionTypes.UpdateMessage;

  constructor(public payload: { message: Update<Message> }) {}
}

export class UpdateMessages implements Action {
  readonly type = MessageActionTypes.UpdateMessages;

  constructor(public payload: { messages: Update<Message>[] }) {}
}

export class DeleteMessage implements Action {
  readonly type = MessageActionTypes.DeleteMessage;

  constructor(public payload: { id: string }) {}
}

export class DeleteMessages implements Action {
  readonly type = MessageActionTypes.DeleteMessages;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearMessages implements Action {
  readonly type = MessageActionTypes.ClearMessages;
}

export type MessageActions =
 LoadMessages
 | AddMessage
 | UpsertMessage
 | AddMessages
 | UpsertMessages
 | UpdateMessage
 | UpdateMessages
 | DeleteMessage
 | DeleteMessages
 | ClearMessages;
