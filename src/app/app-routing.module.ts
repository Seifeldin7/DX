import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdmin, isUser, loggedIn, loggedOut } from './@core/services/permissions/permissions.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./@core/auth/auth.module').then((m) => m.AuthModule),
          canActivate: [loggedOut]
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./@features/admin/admin.module').then((m) => m.AdminModule),
          canActivate: [loggedIn, isAdmin]
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./@features/user/user.module').then((m) => m.UserModule),
          canActivate: [loggedIn, isUser]
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
