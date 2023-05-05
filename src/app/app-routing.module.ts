import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'people',
    loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
  }
  // {
  //   path: 'people',
  //   loadChildren: () => import('./modules/people-ngrx/people-ngrx.module').then(m => m.PeopleNgrxModule)
  // }
  , { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      urlUpdateStrategy: 'eager',
      bindToComponentInputs: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
