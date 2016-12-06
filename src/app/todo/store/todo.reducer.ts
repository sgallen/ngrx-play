import { ActionReducer, Action } from '@ngrx/store';

import { Item } from '../item.model';

import { ToDoState } from '../store';


// Reducer needs to be given an initial state.
export const initialState: ToDoState = {
    items: [],
    selectedItem: null,
};

// Setup the reducer.
export const toDoReducer: ActionReducer<ToDoState> = (
    state: ToDoState = initialState,
    action: Action
) => {
    switch (action.type) {
        default:
            return state;
    }
};
