export interface UserSummaryViewModel {
  id: string;
  name: string;
  emailAddress: string;
  jwtToken: string;
  roles: string[];
}

 export interface MicrosoftOptions {
  options: string;
}

export interface GoogleOptions {
  options: string;
}

 export interface CredentialsViewModel {
  emailAddress: string;
  password: string;
}

export interface Account {
}
