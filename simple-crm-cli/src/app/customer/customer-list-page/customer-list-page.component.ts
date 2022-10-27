import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from '../customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../customer.service';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { startWith } from 'rxjs/internal/operators/startWith';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListPageComponent implements OnInit, OnChanges {

  customers$: Observable<Customer[]>;
  onDestroy$ = new BehaviorSubject<boolean>(false);
  displayColumns = ['type', 'name', 'phoneNumber', 'emailAddress', 'status', 'lastContactDate', 'actions'];
  filterInput = new FormControl('');
  reload$ = new BehaviorSubject<number>(0);

  constructor(
    private custSvc: CustomerService,
    public dialog: MatDialog,
    private router: Router
    ) {
    const valueChanges = this.filterInput.valueChanges.pipe(startWith(''));
    this.customers$ = combineLatest([valueChanges, this.reload$]).pipe(
      debounceTime(700),
      switchMap(([term, _]) => this.custSvc.search(term || '')),
      shareReplay(),
    );
    this.reload$.next(this.reload$.value + 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    //this.dataSource = new MatTableDataSource(this.customers);
  }

  ngOnDestroy(): void{
    this.onDestroy$.next(true);
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

  search(){
    this.reload$.next(this.reload$.value + 1);
  }
}
