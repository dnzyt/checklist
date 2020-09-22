import { createAction, props } from '@ngrx/store';

export const labelsDownloaded = createAction(
  '[App] Labels Downloaded',
  props<{labels: string[]}>()
);
