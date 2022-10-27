import { Component } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { searchCustomersAction } from './customer/store/customer.store';
import { CustomerSearchCriteria, CustomerState } from './customer/store/customer.store.model';
import { LayoutState, selectShowSideNav, toggleSidenav } from './store/layout.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm-cli';

  showSideNav$: Observable<boolean>; // <-- NEW

  constructor(private layout: Store<LayoutState>, private customer: Store<CustomerState>) {
    this.showSideNav$ = this.layout.pipe(select(selectShowSideNav)); // <-- NEW
  }

  sideNavToggle() {
    this.layout.dispatch(toggleSidenav());
  }
}


