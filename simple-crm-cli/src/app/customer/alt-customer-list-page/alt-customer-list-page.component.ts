import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-alt-customer-list-page',
  templateUrl: './alt-customer-list-page.component.html',
  styleUrls: ['./alt-customer-list-page.component.scss']
})
export class AltCustomerListPageComponent implements OnInit {

  customers$: Observable<Customer[]>;
  displayColumns = ['type', 'name', 'phoneNumber', 'emailAddress', 'status', 'lastContactDate', 'actions'];

  constructor(
    private custSvc: CustomerService,
    public dialog: MatDialog,
    private router: Router
    ) {
    this.customers$ = this.custSvc.search('');
    //this.dataSource = new MatTableDataSource(this.customers);
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
