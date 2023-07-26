import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { loadedPeople, loadPeople, searchPeople, updatePerson, updatedPerson } from '../actions/people.actions';
import { PeopleService } from 'src/app/services/people.service';


@Injectable()
export class PeopleEffects {

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      concatMap(() =>
        this.peopleService.getPeople()
          .pipe(
            map(people => loadedPeople({ people })),
            catchError(() => EMPTY)
          ))
        )
      );

  searchPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchPeople),
      concatMap((action) =>
        this.peopleService.search(action.searchQuery)
          .pipe(
            map((people) => loadedPeople({ people })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  updatePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePerson),
      concatMap((action) =>
        this.peopleService.updatePerson(action.person.id, action.person.changes)
          .pipe(
            map((person) => updatedPerson({ person })),
            catchError(() => EMPTY)
          )
      ),
  ));

  constructor(private readonly actions$: Actions,
    private readonly peopleService: PeopleService) {}

}
