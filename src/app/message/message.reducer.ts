import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Message } from './message.model';
import { MessageActions, MessageActionTypes } from './message.actions';

export interface State extends EntityState<Message> {
  isLoading: boolean,
  error: any
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: State = adapter.getInitialState({
  isLoading: false,
  error: {}
});

export function reducer(
  state = initialState,
  action: MessageActions
): State {
  switch (action.type) {
    case MessageActionTypes.AddMessage: {
      const loadingState = {...state, isLoading: true};
      return adapter.addOne(action.payload.message, loadingState);
    }

    case MessageActionTypes.AddMessageSuccess: {
      return {...state, isLoading: false, error: {}};
    }

    case MessageActionTypes.AddMessageError: {
      return {...state, isLoading: false, error: action.payload.error};
    }

    case MessageActionTypes.DeleteMessage: {
      return adapter.removeOne(action.payload.id, state);
    }

    case MessageActionTypes.DeleteMessageSuccess: {
      return {...state, isLoading: false, error: {}};
    }

    case MessageActionTypes.DeleteMessageError: {
      return {...state, isLoading: false, error: action.payload.error};
    }

    case MessageActionTypes.LoadMessages: {
      return adapter.addAll(action.payload.messages, state);
    }

    default: {
      return state;
    }
  }
}

const {
  selectIds,
  selectEntities,
} = adapter.getSelectors();

export const getState = createFeatureSelector<State>('message');

export const getMessages = createSelector(
  getState,
  selectEntities
);

export const getIds = createSelector(
  getState,
  selectIds
);

export const getLoading = createSelector(
  getState,
  (state: State) => state.isLoading
);

export const getError = createSelector(
  getState,
  (state: State) => state.error
);