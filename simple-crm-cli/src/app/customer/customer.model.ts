export type CustomerType = 'none' | 'personal' | 'business' | number | undefined;
export type InteractionMethod = 'none' | 'phone' | 'email';
export type CustomerStatusType = 'Initial' | 'Prospect' | 'Purchased'

  export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    optInNewsLetter: boolean;
    type: CustomerType;
    emailAddress: string;
    lastContactDate: string;
    preferredContactMethod: InteractionMethod;
    status: CustomerStatusType;
  }
