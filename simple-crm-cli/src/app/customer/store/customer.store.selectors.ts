import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState, customerStateAdapter } from "./customer.store.model";


const {
  selectAll: selectAllCustomers,
} = customerStateAdapter.getSelectors();

export const customerFeatureKey = 'customer';

const getCustomerFeature = createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectCustomers = createSelector(
  getCustomerFeature,
  selectAllCustomers
);
