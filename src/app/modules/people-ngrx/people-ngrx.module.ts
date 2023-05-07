import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleNgrxComponent } from './components/people/people-ngrx.component';
import { PersonNgrxComponent } from './components/person/person-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, peopleFeatureKey } from './ngrx/reducers/people.reducer';
import { PeopleEffects } from './ngrx/effects/people.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PeopleNgrxRoutingModule } from './people-ngrx-routing.module';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    PeopleNgrxComponent,
    PersonNgrxComponent
  ],
  exports: [
    PeopleNgrxComponent,
    PersonNgrxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    PeopleNgrxRoutingModule,
    StoreModule.forFeature(peopleFeatureKey, reducer),
    EffectsModule.forFeature([PeopleEffects]),
    StoreRouterConnectingModule,
  ],
})
export class PeopleNgrxModule {}
