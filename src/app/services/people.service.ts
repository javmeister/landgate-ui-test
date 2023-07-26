import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: Person[] = [];

  constructor() {
    this.people = this.mockPeopleList.map(person => new Person(person));
  }

  private mockPeopleList = [
    { id: 'kcvb', firstName: 'John', lastName: 'Doe', age: '41', jobTitle: 'Wanna be Singer', avatarImage: 'portrait-2.jpg' },
    { id: 'dkja', firstName: 'Jane', lastName: 'Doe', age: '22', jobTitle: 'Singer', avatarImage: 'portrait-4.jpg' },
    { id: 'cbxz', firstName: 'Alice', lastName: 'Doe', age: '21', jobTitle: 'Astronaut', avatarImage: 'portrait-1.jpg' },
    { id: 'vmko',  firstName: 'Bob', lastName: 'Doe', age: '30', jobTitle: 'TV Host', avatarImage: 'portrait-3.jpg' },
  ];

  /**
   * Gets all people.
   *
   * @returns Observable<Person[]>
   */
  getPeople(): Observable<Person[]> {
    return of(this.people);
  }

  /**
   * Gets a person from the people list filtering by their id.
   *
   * @param id
   * @returns Observable<Person>
   */
  getPerson(id: string): Observable<Person> {
    var person = this.people.find(person => person.id === id?.toLowerCase());

    if (person) {
      return of(person);
    }

    return of(new Person());
  }

  /**
   * Implements basic people search, filtering by first name.
   *
   * @param searchQuery
   * @returns Observable<Person[]>
   */
  search(searchQuery: string): Observable<Person[]> {
    return this.getPeople().pipe(
      map((list: Person[]) => list.filter((value) => value.firstName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1))
    );
  }

  /**
   * Partially updates a person with the given data.
   *
   * @param id
   * @param data
   * @returns
   */
  updatePerson(id: string | number, data: Partial<Person>): Observable<Person> {
    var personIndex = this.people.findIndex(person => person.id === id);

    if (personIndex > -1) {
      // Inmutable update
      this.people = this.mockPeopleList.map((person, index) => {
        if (index === personIndex) {
          return new Person({ ...this.people[personIndex], ...data });
        }
        return new Person(person)
      });

      return of(this.people[personIndex]);
    }

    return of(new Person());
  }
}
