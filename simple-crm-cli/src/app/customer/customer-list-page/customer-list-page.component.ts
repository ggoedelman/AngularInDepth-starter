import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from '../customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../customer.service';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit, OnChanges {

  customers: Customer[] = [];
  dataSource!: MatTableDataSource<Customer>;// The ! tells Angular you know it may be used before it is set
  displayColumns = ['type', 'name', 'phoneNumber', 'emailAddress', 'status', 'lastContactDate', 'actions'];

  constructor(
    private custSvc: CustomerService,
    public dialog: MatDialog,
    private router: Router
    ) {
    this.custSvc.search('').subscribe({
      next: (list) => {
        this.customers = list;
      }
    });
    this.dataSource = new MatTableDataSource(this.customers);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    //this.dataSource = new MatTableDataSource(this.customers);
  }

  viewDetail(cust: Customer){
    this.router.navigate(['/customers', cust.id]);
  }

  addCustomer() {
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent,{
      width: '250px',
      data: undefined,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
