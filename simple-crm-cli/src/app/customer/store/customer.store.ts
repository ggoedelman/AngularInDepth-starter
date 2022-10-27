import { Dictionary } from "@ngrx/entity";
import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { Customer } from "../customer.model";
import { CustomerSearchCriteria, CustomerState, customerStateAdapter, initialCustomerState } from "./customer.store.model";

export const customerFeatureKey = 'customer';

export const searchCustomersAction = createAction(
  '[Customer] Search Customers',
  props<{ criteria: CustomerSearchCriteria }>());
export const searchCustomersCompleteAction = createAction(
  '[Customer] Search Customers Complete',
  props<{ result: Customer[] }>());

  const rawCustomerReducer = createReducer(
    initialCustomerState,
    on(searchCustomersAction, (state, action) => ({
      ...state,
      criteria: action.criteria,
      searchStatus: 'searching'
    })),
  )

/** Provide reducer in AOT-compilation happy way */
export function customerReducer(state: CustomerState, action: Action) {
  return rawCustomerReducer(state, action);
}


