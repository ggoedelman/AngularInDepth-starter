import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, shareReplay, startWith, switchMap } from 'rxjs';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list-table',
  templateUrl: './customer-list-table.component.html',
  styleUrls: ['./customer-list-table.component.scss']
})

export class CustomerListTableComponent implements OnInit {
  @Input() customers: Customer[] | undefined

  @Output() openCustomer = new EventEmitter<Customer>();

  onDestroy$ = new BehaviorSubject<boolean>(false);
  displayColumns = ['type', 'name', 'phoneNumber', 'emailAddress', 'status', 'lastContactDate', 'actions'];
  filterInput = new FormControl('');
  reload$ = new BehaviorSubject<number>(0);

  constructor(private custSvc: CustomerService,
    public dialog: MatDialog,
    private router: Router) {
    const valueChanges = this.filterInput.valueChanges.pipe(startWith(''));
    this.reload$.next(this.reload$.value + 1);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void{
    this.onDestroy$.next(true);
  }

  viewDetail(cust: Customer){
    this.openCustomer.emit(cust);
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

  search(){
    this.reload$.next(this.reload$.value + 1);
  }

  trackByUserId(index: number, cust: Customer) {
    return cust.id; // some unique value on the array item
  }
}
