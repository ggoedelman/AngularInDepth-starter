import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { MatTableModule } from '@angular/material/table';
import { CustomerService } from './customer.service';
import { CustomerMockService } from './customer-mock.service';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerCreateDialogComponent } from './customer-create-dialog/customer-create-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    CustomerListPageComponent,
    CustomerCreateDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: CustomerService,
      useClass: environment.production ? CustomerService : CustomerMockService
    }
  ]
})
export class CustomerModule { }
