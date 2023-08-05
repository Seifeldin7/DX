import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  defaultLang = 'ar';
  languages = [
    {
      name: 'English',
      key: 'en',
    },
    {
      name: 'Arabic',
      key: 'ar',
    },
  ];

  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.setLang(this.defaultLang);
  }

  setLang(lang: string) {
    const language = lang;
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    const oppositeDirection = language === 'ar' ? 'ltr' : 'rtl';
    this.translateService.use(language);
    this.translateService.defaultLang = language;
    this.document.documentElement.lang = language;
    this.document.body.dir = direction;
    this.document.body.classList.remove(oppositeDirection);
    this.document.body.classList.add(direction);
  }

  changeLang(lang: string) {
    this.setLang(lang);
  }

  get currentLang() {
    return this.translateService.currentLang;
  }

  trans(key: string) {
    return this.translateService.instant(key);
  }
}
