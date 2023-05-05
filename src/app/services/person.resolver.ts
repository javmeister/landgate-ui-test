import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PersonModel } from "../models/person-model";
import { PeopleService } from "./people.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PersonResolver implements Resolve<PersonModel> {
  constructor(private readonly peopleService: PeopleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PersonModel>|Promise<PersonModel>|PersonModel {
    return this.peopleService.getPerson(route.paramMap.get('slug') as string);
  }
}
