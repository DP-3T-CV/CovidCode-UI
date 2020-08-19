import {OIdC} from '../app/auth/open-id-config-service';
export const environment = {
	production: true,
	showWarning: true,
	host: 'http://covidcodeservice.uniteltmais.cv/',
	eiamSelfAdmin:
		'http://10.4.2.239:30876',
	oidc: {
		clientId: 'CovidCode-UI',
		afterLoginPath: 'generate-code',
		stsServer: 'http://keycloak.uniteltmais.cv/auth/realms/cv-covid-code',
		applicationUrl: 'http://covidcodeui.uniteltmais.cv/',
		loginFeedback: 'auth/login-feedback/',
		silentRenew: true,
		useAutoLogin: false,
		debug: true,
		tokenAwareUrlPatterns: ['/v1/(authcode).*']
	} as OIdC
};
