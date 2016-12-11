import { ActionReducer, Action } from '@ngrx/store';

import { Item } from '../item.model';
import {
    ADD_ITEM,
    SELECT_ITEM,
} from '../actions';

import { ToDoState } from './todo.state';


const item: Item = {
    id: 1,
    name: 'foo',
    description: 'bar'
};

export const initialState: ToDoState = {
    items: [item],
    selectedItem: null,
};

export const toDoReducer: ActionReducer<ToDoState> = (
    state: ToDoState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign(
                {},
                state,
                {items: [...state.items, action.payload]}
            );
        case SELECT_ITEM:
            return Object.assign({}, state, {selectedItem: action.payload});
        default:
            return state;
    }
};
