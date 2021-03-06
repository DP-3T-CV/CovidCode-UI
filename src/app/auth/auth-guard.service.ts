import {Inject, Injectable} from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {WINDOW} from '@oblique/oblique';
import {Claims, OauthService} from './oauth.service';

export enum Role {
	HaUI = 'bag-pts-allow'
}

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
	constructor(
		private readonly oauthService: OauthService,
		private readonly router: Router,
		private readonly translate: TranslateService,
		@Inject(WINDOW) private readonly window
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.checkExpectedRole();
	}

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.checkExpectedRole();
	}

	canLoad(route: Route): Observable<boolean> {
		return this.checkExpectedRole();
	}

	private checkExpectedRole(): Observable<boolean> {
		return this.oauthService.claims$.pipe(
			take(1),
			map(claims => this.checkExpectedRoleAfterAuthentication(claims))
		);
	}

	private checkExpectedRoleAfterAuthentication(claims: Claims): boolean {
		console.log(claims);
		if (!claims) {
			this.router.navigate(['auth/auto-login']);
			return false;
		}

		const hasAccess = this.oauthService.hasUserRole(Role.HaUI, claims);
		console.log('Bororo');
		console.log(hasAccess);
		// hasAccess = true;
		if (!hasAccess) {
			console.log(claims);
			this.window.location.href = `https://www.eiam.admin.ch/?c=f!403pts!pub&l=${this.translate.currentLang}`;
		}
		return hasAccess;
	}
}
