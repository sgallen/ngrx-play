import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../../app.state';
import { Item } from '../item.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  _items: Observable<Array<Item>>;

  constructor(
      private store: Store<AppState>
  ) {}

  ngOnInit() {
  }

  get items(): Observable<Array<Item>> {
      this._items = this.store.select(s => s.todo.items);

      return this._items;
  }

}
