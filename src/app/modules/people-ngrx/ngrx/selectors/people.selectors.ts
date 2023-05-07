import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  peopleFeatureKey,
  PeopleState,
  selectIsLoading,
  selectAll,
  selectError,
  selectEntities
} from '../reducers/people.reducer';

import { selectRouteParams } from './router.selectors';

export const peopleFeatureSelector = createFeatureSelector<PeopleState>(peopleFeatureKey);

export const isLoading = createSelector(peopleFeatureSelector, selectIsLoading);
export const error = createSelector(peopleFeatureSelector, selectError);

export const selectPeople = createSelector(peopleFeatureSelector, selectAll);
export const selectPeopleEntities = createSelector(peopleFeatureSelector, selectEntities);
export const selectPerson = createSelector(selectPeopleEntities, selectRouteParams, (people, { id }) => people[id]);
