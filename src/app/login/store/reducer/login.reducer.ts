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

export const reducer = (state: State, action) => createReducer(
  initialState,
  on(LoginActions.login, s => {
    return {...s, username: action.username, password: action.password};
  })
)(state, action);

export const selectLogin = createFeatureSelector<fromApp.State, State>(loginFeatureKey);

export const selectUsername = createSelector(
  selectLogin,
  (state: State) => state.username
);

