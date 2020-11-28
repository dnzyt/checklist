import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import * as LoginActions from '../actions/login.actions';

import * as fromApp from '../../../store';

export const loginFeatureKey = 'login';

export interface State {
  username: string;
  password: string;
  country: string;
  lang: string;
}

const initialState: State = {
  username: 'John',
  password: '123456',
  country: 'US',
  lang: 'EN'
};

export const reducer = createReducer(
  initialState,
  // on function can receive multiple actions if these actions share the same reducer
  on(LoginActions.login, (state, action) => {
    return { ...state, username: action.username, password: action.password };
  })
);

export const selectLogin = createFeatureSelector<fromApp.State, State>(loginFeatureKey);

export const selectUsername = createSelector(
  selectLogin,
  (state: State) => state.username
);

