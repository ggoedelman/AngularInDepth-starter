import { Action, createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export interface LayoutState {
  showSidenav: boolean;
}

const initialState: LayoutState = {
  showSidenav: false
};

// you'll use this key later
export const layoutFeatureKey = 'layout';

export const toggleSidenav = createAction('[Layout] Toggle Sidenav');
export const openSidenav = createAction('[Layout] Open Sidenav');
export const closeSidenav = createAction('[Layout] Close Sidenav');

const rawLayoutReducer = createReducer(
  initialState,
  on(closeSidenav, state => ({...state, showSidenav: false })),
  on(openSidenav, state => ({...state, showSidenav: true })),
  on(toggleSidenav, state => ({...state, showSidenav: !state.showSidenav }))
);

/** Provide reducer in AOT-compilation happy way */
export function layoutReducer(state: LayoutState, action: Action) {
  return rawLayoutReducer(state, action);
}

const getLayoutFeature = createFeatureSelector<LayoutState>(layoutFeatureKey);

export const selectShowSideNav = createSelector(
  getLayoutFeature,
  (state: LayoutState) => state.showSidenav
);
