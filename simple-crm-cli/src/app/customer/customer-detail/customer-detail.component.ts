import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerId: number;
  customer: Customer | undefined;

  constructor(
    private custSvc: CustomerService,
    private route: ActivatedRoute,
  ) {
    this.customerId = +this.route.snapshot.params['id'];
    this.custSvc.get(this.customerId).subscribe({
      next: c => this.customer = c,
      error: () => {}
    });
  }

  ngOnInit(): void {
  }

}
