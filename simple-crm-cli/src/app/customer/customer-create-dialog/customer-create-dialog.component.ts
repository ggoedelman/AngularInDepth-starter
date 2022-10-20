import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-create-dialog',
  templateUrl: './customer-create-dialog.component.html',
  styleUrls: ['./customer-create-dialog.component.scss']
})
export class CustomerCreateDialogComponent implements OnInit {
  detailForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerCreateDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: undefined | Customer
    ) {
      this.dialogRef,
      this.detailForm = this.fb.group({
        firstName: ['', Validators.required], // target form field name is the property name
        lastName: ['', Validators.required],
        phoneNumber: [''],
        emailAddress: ['', [Validators.required, Validators.email]],
        preferredContactMethod: ['email'] // value in the quotes is the initial value
     });
     if(!!data){
      this.detailForm.patchValue(data);
     }
    }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  save(){
    if(!this.detailForm.valid){
      this.detailForm.markAllAsTouched();
      return;
    } else {
      const data = {
        customerId: 3,
        firstName: 'John',
        lastName: 'Doe'
      };

      let customer = {
          ...data, // copies in all 'data' first
          ...this.detailForm.value // overwrites with any that exist from the form
      };

      this.dialogRef.close(customer);
    }
  }

}
