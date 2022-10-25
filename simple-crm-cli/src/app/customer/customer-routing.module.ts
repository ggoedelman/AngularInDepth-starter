import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { AltCustomerListPageComponent } from './alt-customer-list-page/alt-customer-list-page.component';
import { AuthenticatedGuard } from '../authenticated.guard';

const routes: Routes = [
  {
    path: 'customers',
    pathMatch: 'full',
    component: CustomerListPageComponent
  },
  {
    path: 'customers',
    children: [
      {
        path: ':id',
        pathMatch: 'full',
        component: CustomerDetailComponent,
        canActivate: [AuthenticatedGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
