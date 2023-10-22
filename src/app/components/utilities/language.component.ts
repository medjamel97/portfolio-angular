import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';

@Component({
  selector: 'app-language-component',
  templateUrl: './language.component.html',
  standalone: true,
  imports: [
    MatMenuModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    FlexModule,
  ],
})
export class LanguageComponent {
  constructor(public translate: TranslateService) {}

  changeLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
}
