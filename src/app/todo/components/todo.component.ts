import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../../app.state';
import { Item } from '../item.model';
import { ToDoActions } from '../actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
      private store: Store<AppState>,
      private toDoActions: ToDoActions
  ) {}

  ngOnInit() {
  }

  get items(): Observable<Array<Item>> {
      return this.store.select(s => s.todo.items);
  }

  addItem() {
    this.toDoActions.addItem();
  }
}
