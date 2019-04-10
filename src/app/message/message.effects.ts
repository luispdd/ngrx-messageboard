import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from './message.actions';
import { map, delay, mergeMap, catchError } from 'rxjs/operators';
import { of, from, EMPTY } from 'rxjs';

@Injectable()
export class MessageEffects {

  @Effect()
  addMessage$ = this.actions$
    .pipe(
      ofType(fromActions.MessageActionTypes.AddMessage),
      mergeMap((action: fromActions.AddMessage) => from(['fakeServiceResponse'])
        .pipe(
          delay(2000),
          map(() => {
            return new fromActions.AddMessageSuccess();
            },
            catchError((error) => {
              console.log('error', error);
              return of(new fromActions.AddMessageError({error: error}))
            })
          )
        )
      )
    );

  @Effect()
  deleteMessage$ = this.actions$
    .pipe(
      ofType(fromActions.MessageActionTypes.DeleteMessage),
      mergeMap((action: fromActions.DeleteMessage) => from(['fakeServiceResponse'])
        .pipe(
          delay(2000),
          map(() => {
            return new fromActions.DeleteMessageSuccess();
            },
            catchError((error) => {
              console.log('error', error);
              return of(new fromActions.DeleteMessageError({error: error}))
            })
          )
        )
      )
    );

  constructor(private actions$: Actions) {}

}
