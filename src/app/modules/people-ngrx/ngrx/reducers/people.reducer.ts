import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { loadPeople, loadedPeople, updatePerson } from '../actions/people.actions';
import { Person } from 'src/app/models/person';

export const peopleFeatureKey = 'people';

export interface PeopleState extends EntityState<Person> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (person) => person.id
});

export const initialState: PeopleState = adapter.getInitialState({
  isLoading: true,
  error: null,
});


export const reducer = createReducer(
  initialState,

  on(loadPeople, (state, action) =>
    adapter.setAll([], {
      ...state,
      isLoading: true
    })),

  on(loadedPeople, (state, action) =>
    adapter.setAll(action.people, {
      ...state,
      isLoading: false,
    })),

  on(updatePerson, (state, { person }) =>
    adapter.updateOne(person, state)),
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectIsLoading = (state: PeopleState) => state.isLoading;
export const selectError = (state: PeopleState) => state.error;

