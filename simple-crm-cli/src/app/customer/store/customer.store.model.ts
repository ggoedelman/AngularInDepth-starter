import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Customer } from "../customer.model";

export interface CustomerSearchCriteria {
  term: string
}
export type SearchStatus = '' | 'searching' | 'complete';

export interface CustomerState extends EntityState<Customer> {
  searchStatus: string,
  criteria: CustomerSearchCriteria
}

export const customerStateAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
  selectId: (item: Customer) => item.id
});

export const initialCustomerState: CustomerState = customerStateAdapter.getInitialState({
  searchStatus: '',
  criteria: {term: ''}
});
