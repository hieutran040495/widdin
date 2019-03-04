import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MenuModel } from '../../../../shared/models/menu';
import { MENUS } from './menu';

@Component({
  selector: 'app-manager-store-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class ManagerStoreLeftBarComponent implements OnInit {
  public asides: MenuModel[] = [];

  constructor() {}

  ngOnInit() {
    MENUS.map(item => {
      this.asides.push(new MenuModel(item));
    });
  }
}
