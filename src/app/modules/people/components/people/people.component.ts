import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public people$!: Observable<Person[]>;

  constructor(private readonly peopleService: PeopleService) { }

  ngOnInit() {
    this.people$ = this.peopleService.getPeople();
  }

}
