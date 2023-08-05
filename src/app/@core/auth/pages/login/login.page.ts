import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { LanguageService } from 'src/app/@core/services/language/language.service';
import { StorageService } from 'src/app/@core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [MessageService],
})
export class LoginPage {
  loginForm: FormGroup = new FormGroup({});

  role!: string;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private languageService: LanguageService,
    private messageService: MessageService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  isFormValid(form: FormGroup) {
    const roles = ['user', 'admin'];
    const username = form.controls['username'].value;
    const password = form.controls['password'].value;
    if (roles.includes(username) && username === password) {
      this.role = roles.find((r) => r === username) || '';
      return true;
    }
    return false;
  }

  onSubmit(): void {
    if (this.isFormValid(this.loginForm)) {
      this.authService
        .login({
          username: 'mor_2314',
          password: '83r5^_',
        })
        .subscribe({
          next: (rsp) => {
            this.storageService.set('token', rsp.token);
            this.storageService.set('role', this.role);
            this.router.navigate([this.role]);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
            });
          },
        });
    } else {
      this.loginForm.reset();
    }
  }
}
