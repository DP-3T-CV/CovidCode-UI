import {OIdC} from '../app/auth/open-id-config-service';
export const environment = {
	production: true,
	showWarning: true,
	host: 'https://covidcodeservice.nanosmon.cv',
	eiamSelfAdmin:
		'https://10.4.2.239:30876',
	oidc: {
		clientId: 'CovidCode-UI',
		afterLoginPath: 'generate-code',
		stsServer: 'https://keycloak.nanosmon.cv/auth/realms/cv-covid-code',
		applicationUrl: 'https://covidcodeui.nanosmon.cv/',
		loginFeedback: 'auth/login-feedback/',
		silentRenew: true,
		useAutoLogin: false,
		debug: true,
		tokenAwareUrlPatterns: ['/v1/(authcode).*']
	} as OIdC
};
