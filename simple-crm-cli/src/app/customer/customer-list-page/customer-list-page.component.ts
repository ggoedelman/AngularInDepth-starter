import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from '../customer.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit, OnChanges {

  customers: Customer[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      phoneNumber: '314-555-1234',
      optInNewsLetter: true,
      type: 'business',
      emailAddress: 'john@nexulacademy.com',
      status: 'Prospect',
      preferredContactMethod: 'phone',
      lastContactDate: new Date().toISOString()
    },
    {
      id: 1,
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
  dataSource!: MatTableDataSource<Customer>;
  displayColumns = ['name', 'phoneNumber', 'emailAddress', 'status'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.customers);
  }

}
