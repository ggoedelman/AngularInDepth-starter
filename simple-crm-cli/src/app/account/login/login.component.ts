import { PlatformLocation } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSummaryViewModel } from '../account.models';
import { AccountService } from '../account.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   loginType: 'undecided' | 'password' | 'microsoft' | 'google' = 'undecided';
   loginForm: FormGroup;
   currentUser: Observable<UserSummaryViewModel>;

constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    public snackBar: MatSnackBar,
    private router: Router,
    private platformLocation: PlatformLocation,
) {
    this.currentUser = this.accountService.user;
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
}

// partial file.  This just shows the new code to load the OAuth settings.

/**
* This method toggles the display to the first spinner and an option to use another
* option instead.  This is when its time to query your server for the OAuth keys to use,
* which is better than storing the keys a second time in the Angular source code.
* Notice this does not get back the private secret key, only the public clientId.
*/
useMicrosoft(): void {
this.loginType = 'microsoft';
this.snackBar.open('Signing In with Microsoft...', '', { duration: 2000 });
const baseUrl =
  'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
this.accountService.loginMicrosoftOptions().subscribe((opts) => {
  const options: { [key: string]: string } = {
    ...opts,
    response_type: 'code',
    redirect_uri:
      window.location.origin +
      this.platformLocation.getBaseHrefFromDOM() +
      'account/signin-microsoft',
  };
  //console.log(options.redirect_uri);
  let params = new HttpParams();
  for (const key of Object.keys(options)) {
    params = params.set(key, options[key]); // encodes values automatically.
  }

  window.location.href = baseUrl + params.toString();
});
}
}
