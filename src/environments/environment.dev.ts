import {OIdC} from '../app/auth/open-id-config-service';

export const environment = {
	production: true,
	showWarning: true,
	host: 'https://covidcodeservice.nanosmon.cv',
	eiamSelfAdmin:
		'https://keycloak.nanosmon.cv/',
	oidc: {
		clientId: 'CovidCode-UI',
		afterLoginPath: 'generate-code',
		stsServer: 'https://keycloak.nanosmon.cv/auth/realms/cv-covid-code',
		applicationUrl: 'https://covidcodeui.nanosmon.cv/',
		loginFeedback: 'auth/login-feedback/',
		max_id_token_iat_offset_allowed_in_seconds: 600000,
		silentRenew: true,
		useAutoLogin: false,
		debug: true,
		tokenAwareUrlPatterns: ['/v1/(authcode).*']
	} as OIdC
};
