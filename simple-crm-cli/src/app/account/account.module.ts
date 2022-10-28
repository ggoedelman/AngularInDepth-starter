import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { SigninGoogleComponent } from './signin-google/signin-google.component';
import { SigninMicrosoftComponent } from './signin-microsoft/signin-microsoft.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    LoginComponent,
    SigninGoogleComponent,
    SigninMicrosoftComponent,
    NotAuthorizedComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AccountModule { }
