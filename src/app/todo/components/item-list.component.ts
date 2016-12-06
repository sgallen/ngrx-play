import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../item.model';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements OnInit {
  @Input() public items: Array<Item>;

  constructor() { }

  ngOnInit() {
  }

}
