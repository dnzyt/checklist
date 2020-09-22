import { ActionReducerMap, createReducer, createSelector, on } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../custom-route-serializer';
import { labelsDownloaded } from '../actions/app.actions';

import * as fromLogin from '../../login/store';

export interface State {
  login: fromLogin.State;
  labels: string[];
  router: RouterReducerState<RouterStateUrl>;
}

const labelsReducer = (state, action) => createReducer(
  [],
  on(labelsDownloaded, s => ({ ...s }))
)(state, action);



export const reducerMap: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  router: routerReducer,
  labels: labelsReducer
};

export const selectLabels = (state: State) => state.labels;
export const selectLoginLabels = createSelector(
  selectLabels,
  fromLogin.selectLogin,
  (labels, login) => ({login, labels})
);
