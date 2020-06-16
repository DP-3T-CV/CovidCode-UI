import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {DateAdapter} from '@angular/material/core';
import {TranslateService} from '@ngx-translate/core';
import {map, startWith} from 'rxjs/operators';
import {ObErrorMessagesModule} from '@oblique/oblique';
import {SharedModule} from 'shared/shared.module';
import {GenerateCodeComponent} from './generate-code.component';
import {CodeComponent} from './code/code.component';
import {AuthGuardService} from '../auth/auth-guard.service';

@NgModule({
	declarations: [GenerateCodeComponent, CodeComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([{path: '', component: GenerateCodeComponent, canActivate: [AuthGuardService]}]),
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatMomentDateModule,
		ObErrorMessagesModule
	]
})
export class GenerateCodeModule {
	constructor(adapter: DateAdapter<any>, translate: TranslateService) {
		translate.onLangChange
			.pipe(
				map(lang => lang.lang),
				startWith(translate.currentLang),
				map(lang => (lang === 'en' ? 'en-GB' : `${lang}-CH`))
			)
			.subscribe(locale => adapter.setLocale(locale));
	}
}
