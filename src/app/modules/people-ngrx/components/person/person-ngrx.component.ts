import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person';
import { FormControl, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectPerson } from '../../ngrx/selectors/people.selectors';
import { Observable, Subscription } from 'rxjs';
import { loadPeople, updatePerson } from '../../ngrx/actions/people.actions';



@Component({
  selector: 'app-person-ngrx-component',
  templateUrl: './person-ngrx.component.html',
  styleUrls: ['./person-ngrx.component.scss']
})
export class PersonNgrxComponent implements OnDestroy {
  public person$: Observable<Person | undefined>;

  private _personInitialValues!: Person;
  private _subscription$: Subscription;

  constructor(private readonly store: Store) {
    this.store.dispatch(loadPeople());

    this.person$ = this.store.select(selectPerson);

    this._subscription$ = this.person$.subscribe(person => {
      this._personInitialValues = person!;
    });
  }

  ngOnDestroy(): void {
    this._subscription$?.unsubscribe?.();
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(updatePerson({ person: { id: form.value.id, changes: form.value } }));

    // Refresh the values after the update action changes the state
    this.store.dispatch(loadPeople());

    // Reset the form state
    this.reset(form);
  }

  isDirty(form: NgForm) {
    return form.dirty && form.touched;
  }

  reset(form: NgForm) {
    form.reset(this._personInitialValues);
  }
}
