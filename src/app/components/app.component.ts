import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AlertMaker} from '../utils/alert-maker';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSidenav} from '@angular/material/sidenav';
import {TranslateService} from '@ngx-translate/core';
import {Direction} from '@angular/cdk/bidi';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @ViewChild(MatSidenav) sidenav!: MatSidenav;
    direction: Direction = 'ltr';

    constructor(
        public translateService: TranslateService,
        public router: Router,
        protected snackBar: MatSnackBar
    ) {
        translateService.setDefaultLang('fr');

        let storedLanguage = localStorage.getItem('language') ?? 'fr';

        translateService.use(storedLanguage);
        translateService.onLangChange.subscribe((_) => {
            if (translateService.currentLang == 'ar') {
                this.direction = 'rtl';
            } else {
                this.direction = 'ltr';
            }
            document
                .getElementsByTagName('html')[0]
                .setAttribute('lang', this.direction);
            document
                .getElementsByTagName('body')[0]
                .setAttribute('dir', this.direction);
        });

        AlertMaker.snackBar = snackBar;
    }

    toggleSidenav() {
        this.sidenav.toggle();
    }
}
