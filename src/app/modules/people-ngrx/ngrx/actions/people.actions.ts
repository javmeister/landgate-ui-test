import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Person } from '../../../../models/person';

// This is a request
export const loadPeople = createAction(
  '[People] Request Load People'
);

// This is a load success
export const loadedPeople = createAction(
  '[People] People Loaded Successfully',
  props<{ people: Person[] }>()
)

export const updatePerson = createAction(
  '[People] Update Person',
  props<{ person: Update<Person> }>()
);

export const searchPeople = createAction(
  '[People] Search People',
  props<{ searchQuery: string }>()
);

// This is an update success
export const updatedPerson = createAction(
  '[People] Person Updated Successfully',
  props<{ person: Person }>()
)
