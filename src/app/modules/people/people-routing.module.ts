import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { PersonResolver } from 'src/app/services/person.resolver';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  {
    path: ':id',
    component: PersonComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      person: PersonResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
