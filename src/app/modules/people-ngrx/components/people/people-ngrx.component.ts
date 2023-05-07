import { Component, OnInit } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Person } from 'src/app/models/person';
import { loadPeople } from '../../ngrx/actions/people.actions';
import { Observable } from 'rxjs';
import { selectPeople } from '../../ngrx/selectors/people.selectors';
import { PeopleState } from '../../ngrx/reducers/people.reducer';

@Component({
  selector: 'app-people-ngrx-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {

  public people$: Observable<Person[]>;

  constructor(private store: Store<PeopleState>) {
    this.store.dispatch(loadPeople());

    this.people$ = this.store.select(selectPeople);
  }

  ngOnInit() {}

}
