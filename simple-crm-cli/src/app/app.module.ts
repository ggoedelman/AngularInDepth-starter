import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import  {MatListModule } from '@angular/material/list';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppIconsService } from './appiconsservice.service';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { LoginComponent } from './account/login/login.component'
import { RegistrationComponent } from './account/registration/registration.component';
import { SigninGoogleComponent } from './account/signin-google/signin-google.component';
import { SigninMicrosoftComponent } from './account/signin-microsoft/signin-microsoft.component';

@NgModule({
  declarations: [
    AppComponent,
    NotAuthorizedComponent,
    LoginComponent,
    RegistrationComponent,
    SigninGoogleComponent,
    SigninMicrosoftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconService: AppIconsService) {}
}
