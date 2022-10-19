import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerMockService } from './customer-mock.service';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Customer[]>{
    return this.http.get<Customer[]>('/api/customer/search?term=' + term);
  }

  insert(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/api/customer/save', customer);
  }

 update(customer: Customer): Observable<Customer> {
  // example url: /api/customer/5
  return this.http.put<Customer>(`/api/customer/${customer.id}`, customer);
  }
}
