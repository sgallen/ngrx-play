import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListComponent } from './components/item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoComponent, ItemListComponent, ItemListComponent]
})
export class TodoModule { }
