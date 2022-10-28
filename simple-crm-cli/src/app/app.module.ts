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
import { NotAuthorizedComponent } from './account/not-authorized/not-authorized.component';
import { LoginComponent } from './account/login/login.component'
import { RegistrationComponent } from './account/registration/registration.component';
import { SigninMicrosoftComponent } from './account/signin-microsoft/signin-microsoft.component';
import { SigninGoogleComponent } from './account/signin-google/signin-google.component';
import { StoreModule } from '@ngrx/store';
import { layoutFeatureKey, layoutReducer } from './store/layout.store';
import { customerFeatureKey, customerReducer } from './customer/store/customer.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AccountModule } from './account/account.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    StoreModule.forRoot({}), // for no global state, use an empty object,  {}.
    StoreModule.forFeature(layoutFeatureKey, layoutReducer),
    StoreModule.forFeature(customerFeatureKey, customerReducer),
    StoreDevtoolsModule.instrument({
      name: 'Nexul Academy - Simple CRM'
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    AccountModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconService: AppIconsService) {}
}
