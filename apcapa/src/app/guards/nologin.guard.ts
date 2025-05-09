import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { auth } from "firebase";
import { isNull, isNullOrUndefined } from "util";

@Injectable({
  providedIn: "root",
})
export class NologinGuard implements CanActivate {
  constructor(private AFauth: AngularFireAuth, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.AFauth.authState.pipe(
      map((auth) => {
        if (isNullOrUndefined(auth)) {
          return true;
        } else {
          this.router.navigate(["/folder/Inbox"]);
          return false;
        }
      })
    );
  }
}
