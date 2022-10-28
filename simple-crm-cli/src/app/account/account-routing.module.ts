import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from 'src/app/account/not-authorized/not-authorized.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninMicrosoftComponent } from './signin-microsoft/signin-microsoft.component';
import { SigninGoogleComponent } from './signin-google/signin-google.component';

const routes: Routes = [
  {
    path: 'account',
    children: [
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'signin-microsoft',
    component: SigninMicrosoftComponent,
  },
  {
    path: 'signin-google',
    component: SigninGoogleComponent,
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent,
    // generated in the prior lesson. you may want to move it to this module and out of AppModule.
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
