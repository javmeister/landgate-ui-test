import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Person } from "../models/person";
import { PeopleService } from "./people.service";

export const PersonResolver: ResolveFn<Person> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PeopleService).getPerson(route.paramMap.get('id')!);
    };
