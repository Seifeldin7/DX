import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { LanguageService } from 'src/app/@core/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  language = 'ar'

  constructor(private authService: AuthService, public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

  }

  logout() {
    this.authService.logout();
  }

  changeLang() {
    this.language = this.language === 'ar' ? 'en' : 'ar';
    this.languageService.changeLang(this.language);
  }
}
