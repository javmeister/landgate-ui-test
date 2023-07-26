import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [PeopleComponent, PersonComponent],
  imports: [CommonModule , PeopleRoutingModule, FormsModule, QuillModule],
  exports: [PeopleComponent]
})
export class PeopleModule {}
