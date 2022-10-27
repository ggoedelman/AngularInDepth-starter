import { Dictionary } from "@ngrx/entity";
import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { Customer } from "../customer.model";
import { CustomerSearchCriteria } from "./customer.store.model";

export interface CustomerState {
  searchStatus: string;
  criteria: CustomerSearchCriteria;
}

const initialCustomerState: CustomerState = {
  searchStatus: "",
  criteria: {term: ""},
};

export const customerFeatureKey = 'customer';

export const searchCustomersAction = createAction(
  '[Customer] Search Customers',
  props<{ criteria: CustomerSearchCriteria }>());
export const searchCustomersCompleteAction = createAction(
  '[Customer] Search Customers Complete',
  props<{ result: Customer[] }>());

const rawCustomerReducer = createReducer(
  initialCustomerState,
  on(searchCustomersAction, state => ({...state, criteria: {term: ""}, searchStatus: "Incomplete" })),
  on(searchCustomersCompleteAction, state => ({...state, searchStatus: "Complete" })),
);

/** Provide reducer in AOT-compilation happy way */
export function customerReducer(state: CustomerState, action: Action) {
  return rawCustomerReducer(state, action);
}

const getCustomerFeature = createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectSearchCustomerCriteria = createSelector(
  getCustomerFeature,
  (state: CustomerState) => state.criteria
);

export const selectSearchCustomerStatus = createSelector(
  getCustomerFeature,
  (state: CustomerState) => state.searchStatus
);
