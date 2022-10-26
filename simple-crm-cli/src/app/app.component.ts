import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { LayoutState, selectShowSideNav, toggleSidenav } from './store/layout.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm-cli';

  showSideNav$: Observable<boolean>; // <-- NEW

  constructor(private store: Store<LayoutState>) {
    this.showSideNav$ = this.store.pipe(select(selectShowSideNav)); // <-- NEW
  }

  sideNavToggle() {
    this.store.dispatch(toggleSidenav());
  }
}


