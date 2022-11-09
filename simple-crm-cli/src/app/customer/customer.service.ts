import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerMockService } from './customer-mock.service';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  customers: Customer[] = [];

  constructor(private http: HttpClient) {
    console.warn('Warning: You are using the CustomerService, not intended for production use');
    const localCustomers = localStorage.getItem('customers');
    if(localCustomers){
      this.customers = JSON.parse(localCustomers);
    } else {
      this.customers = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          phoneNumber: '314-555-1234',
          optInNewsLetter: true,
          type: 'business',
          emailAddress: 'john@nexulacademy.com',
          status: 'Initial',
          preferredContactMethod: 'phone',
          lastContactDate: new Date().toISOString()
        },
        {
          id: 2,
          firstName: 'Bob',
          lastName: 'Jones',
          phoneNumber: '314-555-9873',
          optInNewsLetter: true,
          type: 'business',
          emailAddress: 'bob@example.com',
          status: 'Prospect',
          preferredContactMethod: 'email',
          lastContactDate: new Date().toISOString()
        }
      ];
    }
   }

   search(term: string): Observable<Customer[]>{
    //TODO: only return the ones with a term in a searchable field (name, email, ?)
    const result = this.customers.filter(x =>
      (x.firstName.includes(term) || x.lastName.includes(term)) ||
      x.phoneNumber.includes(term) ||
      x.emailAddress.includes(term)
      );
    return of(result);
  }

  insert(customer: Customer): Observable<Customer> {
    //TODO: set the customer.Id to 1 higher than other customer ids in this list;
    this.customers = [...this.customers, customer];
    localStorage.setItem('customers', JSON.stringify(this.customers));
    return of(customer);
  }

  update(customer: Customer): Observable<Customer> {
    //replace current matching customer from the list with this updated customer.
    localStorage.setItem('customers', JSON.stringify(this.customers));
    return of(customer);
  }

  get(customerId: number): Observable<Customer> {
    // Note: if a string "1" was passed into here, this would not match customer with id 1.
    // With === the type on both sides must be the same.  "1" is not equal to 1.
    const item = this.customers.find(x => x.id === customerId) as Customer;
    return of(item);
  }
}
