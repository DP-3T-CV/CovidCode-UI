export const environment = {
	production: true,
	showWarning: true,
	host: 'http://covidcodeservice.uniteltmais.cv',
	eiamSelfAdmin:
		'http://keycloak.uniteltmais.cv',
	oidc: {
		clientId: 'CovidCode-UI',
		afterLoginPath: '/generate-code',
		stsServer: 'http://keycloak.uniteltmais.cv/auth/realms/cv-covid-code',
		applicationUrl: 'http://covidcodeui.uniteltmais.cv/auth/login-feedback/',
		post_logout_redirect_uri: 'http://covidcodeui.uniteltmais.cv/',
		silentRenew: true,
		useAutoLogin: false,
		debug: true,
		token_aware_url_patterns: ['/v1/(authcode).*']
	}
};
