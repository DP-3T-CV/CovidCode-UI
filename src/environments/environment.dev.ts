import {OIdC} from '../app/auth/open-id-config-service';

export const environment = {
	production: true,
	showWarning: true,
	host: 'http://covidcodeservice.nanosmon.cv',
	eiamSelfAdmin:
		'http://keycloak.nanosmon.cv/',
	oidc: {
		clientId: 'CovidCode-UI',
		afterLoginPath: 'generate-code',
		stsServer: 'http://keycloak.nanosmon.cv/auth/realms/cv-covid-code',
		applicationUrl: 'http://covidcodeui.nanosmon.cv/',
		loginFeedback: 'auth/login-feedback/',
		max_id_token_iat_offset_allowed_in_seconds: 600000,
		silentRenew: true,
		useAutoLogin: false,
		debug: true,
		tokenAwareUrlPatterns: ['/v1/(authcode).*']
	} as OIdC
};
