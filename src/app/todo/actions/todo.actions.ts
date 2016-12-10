import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';

import { Item } from '../item.model';


export const ADD_ITEM = 'ADD_ITEM';

@Injectable()
export class ToDoActions {
    constructor(private store: Store<AppState>) {}

    addItem() {
        const payload: Item = {
            id: 1,
            name: 'Strong Bad',
            description: 'Mouthy luchador'
        };
        this.store.dispatch({type: ADD_ITEM, payload});
    }
}
