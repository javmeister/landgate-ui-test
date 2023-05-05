import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: PersonModel[] = [];

  constructor() {
    this.people = this.mockPeopleList.map(person => new PersonModel(person));
  }

  private mockPeopleList = [
    { firstName: 'John', lastName: 'Doe', age: '41', workTitle: 'Wanna be Singer', avatarImage: 'portrait-2.jpg' },
    { firstName: 'Jane', lastName: 'Doe', age: '22', workTitle: 'Singer', avatarImage: 'portrait-4.jpg' },
    { firstName: 'Alice', lastName: 'Doe', age: '21', workTitle: 'Astronaut', avatarImage: 'portrait-1.jpg' },
    { firstName: '', lastName: '', age: '30', workTitle: 'TV Host', avatarImage: 'portrait-3.jpg' },
  ];

  //I am an ambitious workaholic, but apart from that, pretty simple person.

  getPeople(): Observable<PersonModel[]> {
    return of(this.people);
  }

  getPerson(slug: string): Observable<PersonModel> {
    var person = this.people.find(person => person.slug === slug?.toLowerCase());

    if (person) {
      return of(person);
    }

    return of(new PersonModel());
  }
}
