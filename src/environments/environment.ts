export const environment = {
	production: true,
	showWarning: true,
	host: 'http://172.18.50.35:84',
	eiamSelfAdmin:
		'http://172.18.50.35:8080',
	oidc: {
		clientId: 'CovidCode-UI',
		afterLoginPath: '/generate-code',
		stsServer: 'http://172.18.50.35:8080/realms/cv-covid-code',
		applicationUrl: 'http://172.18.50.35:4200/auth/login-feedback/',
		post_logout_redirect_uri: 'http://172.18.50.35:4200/',
		silentRenew: true,
		useAutoLogin: false,
		debug: true,
		token_aware_url_patterns: ['/v1/(authcode).*']
	}
};
