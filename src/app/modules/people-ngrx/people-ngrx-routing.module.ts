import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleNgrxComponent } from './components/people/people-ngrx.component';
import { PersonNgrxComponent } from './components/person/person-ngrx.component';

const routes: Routes = [
  { path: '', component: PeopleNgrxComponent },
  {
    path: ':id',
    component: PersonNgrxComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleNgrxRoutingModule {}
