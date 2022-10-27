import { Component } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerState, searchCustomersAction, selectSearchCustomerCriteria, selectSearchCustomerStatus } from './customer/store/customer.store';
import { CustomerSearchCriteria } from './customer/store/customer.store.model';
import { LayoutState, selectShowSideNav, toggleSidenav } from './store/layout.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm-cli';

  showSideNav$: Observable<boolean>; // <-- NEW
  criteria$: Observable<CustomerSearchCriteria>;
  searchStatus$: Observable<string>;

  constructor(private layout: Store<LayoutState>, private customer: Store<CustomerState>) {
    this.showSideNav$ = this.layout.pipe(select(selectShowSideNav)); // <-- NEW

    this.criteria$ = this.customer.pipe(select(selectSearchCustomerCriteria));
    this.searchStatus$ = this.customer.pipe(select(selectSearchCustomerStatus));
  }

  sideNavToggle() {
    this.layout.dispatch(toggleSidenav());
  }
}


