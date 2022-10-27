import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Customer } from "../customer.model";
import { CustomerState } from "./customer.store";

export interface CustomerSearchCriteria{
  term: string;
}

export const customerStateAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
  selectId: (item: Customer) => item.id // <-- defines the key property
});

export const initialCustomerState: CustomerState = customerStateAdapter.getInitialState({
  searchStatus: '',
  criteria: {term: ''},
});
