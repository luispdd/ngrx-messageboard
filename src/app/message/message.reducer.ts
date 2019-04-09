import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Message } from './message.model';
import { MessageActions, MessageActionTypes } from './message.actions';

export interface State extends EntityState<Message> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: MessageActions
): State {
  switch (action.type) {
    case MessageActionTypes.AddMessage: {
      return adapter.addOne(action.payload.message, state);
    }

    case MessageActionTypes.UpsertMessage: {
      return adapter.upsertOne(action.payload.message, state);
    }

    case MessageActionTypes.AddMessages: {
      return adapter.addMany(action.payload.messages, state);
    }

    case MessageActionTypes.UpsertMessages: {
      return adapter.upsertMany(action.payload.messages, state);
    }

    case MessageActionTypes.UpdateMessage: {
      return adapter.updateOne(action.payload.message, state);
    }

    case MessageActionTypes.UpdateMessages: {
      return adapter.updateMany(action.payload.messages, state);
    }

    case MessageActionTypes.DeleteMessage: {
      return adapter.removeOne(action.payload.id, state);
    }

    case MessageActionTypes.DeleteMessages: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case MessageActionTypes.LoadMessages: {
      return adapter.addAll(action.payload.messages, state);
    }

    case MessageActionTypes.ClearMessages: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
