import { Component, Input, OnDestroy } from '@angular/core';
import { Person } from 'src/app/models/person';
import { NgForm } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';
import { Observable, Subscription, lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnDestroy  {
  // Angular 16 route params binding FTW!
  @Input() id?: string;

  public person!: Person;

  private _initialValues!: Person;
  private _personSubscription!: Subscription;

  constructor(private readonly peopleService: PeopleService,
    private readonly route: ActivatedRoute) {
      this.person = this.route.snapshot.data['person'];

      this._initialValues = this.person;
  }

  ngOnDestroy(): void {
    this._personSubscription?.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // The service updates the person in the "store", but without ngrx we need to refresh the resolver
    this.peopleService.updatePerson(form.value.id, form.value)
      .subscribe(person => this.person = person); // Refresh the data manually, this ain't ngrx

    // Reset the form state
    this.reset(form);
  }

  isDirty(form: NgForm) {
    return form.dirty && form.touched;
  }

  reset(form: NgForm) {
    form.reset(this._initialValues);
  }
}
