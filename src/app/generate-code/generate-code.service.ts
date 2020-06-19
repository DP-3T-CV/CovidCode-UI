import {Injectable} from '@angular/core';
import {AuthorizationCodeCreateDto, AuthorizationCodeResponseDto} from './generate-code.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from 'shared/api.service';

@Injectable({
	providedIn: 'root'
})
export class GenerateCodeService {
	private readonly api = 'authcode';

	constructor(private readonly http: ApiService) {}

	sendData(data: AuthorizationCodeCreateDto): Observable<string> {
		return this.http.post<AuthorizationCodeResponseDto>(this.api, data).pipe(
			map(result => result.authorizationCode),
			map(authCode => authCode.match(/(.{3})/g).join(' '))
		);
	}
}
