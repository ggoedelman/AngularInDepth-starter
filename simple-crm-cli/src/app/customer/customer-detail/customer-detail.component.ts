import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  editDetailForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.customerId = +this.route.snapshot.params['id'];
    this.createForm();
    this.custSvc.get(this.customerId).subscribe(cust => {
      if (cust) {
        this.customer = cust;
        this.editDetailForm.patchValue(this.customer);
      }
    });
  }

  ngOnInit(): void {
  }

  public createForm(): void {
    this.editDetailForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      preferredContactMethod: ['email']
    });
  }

  public save() {
    if (!this.editDetailForm.valid) { this.editDetailForm.markAllAsTouched(); return; }
    const customer = { ...this.customer, ...this.editDetailForm.value };
    this.custSvc.update(customer).subscribe({
       next: (result) => {
        this.snackBar.open('Customer saved', 'OK');
       },
       error: (err) => {
        this.snackBar.open('Customer did not save', 'OK');
       }
    });  //  <-- NEW
 }
}
