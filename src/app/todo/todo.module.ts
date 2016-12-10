import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    TodoComponent,
    ItemListComponent,
} from './components';
import { ToDoActions } from './actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoComponent,
    ItemListComponent,
  ],
  exports: [
    TodoComponent,
  ],
  providers: [
    ToDoActions,
  ]
})
export class TodoModule { }
