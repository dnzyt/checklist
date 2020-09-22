import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../../login.service';
import { Injectable } from '@angular/core';
import { login } from '..';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';


@Injectable()
export class LoginEffects {

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.loginService.login(action.username, action.password)
          .pipe(
            map(res => ({ type: '[Login API] Login Successful'})),
            catchError(err => {
              console.log('err: ', err);
              return of({ type: '[Login API] Login Failed'});
            })
          )
      )
    )
  );

  constructor(
    private action$: Actions,
    private loginService: LoginService
  ) {}
}
