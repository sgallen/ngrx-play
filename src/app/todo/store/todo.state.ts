import { Item } from '../item.model';


export interface ToDoState {
    items: Item[];
    selectedItem: Item;
}
