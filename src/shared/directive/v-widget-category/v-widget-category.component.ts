import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { MenuModel } from '../../../shared/models/menu';

@Component({
  selector: 'app-v-widget-category',
  templateUrl: './v-widget-category.component.html',
  styleUrls: ['./v-widget-category.component.scss']
})
export class VWidgetCategoryComponent implements OnInit {

  private _asides: MenuModel[];
  @Input('asides')
  public get asides(): MenuModel[] {
    return this._asides;
  }
  public set asides(v: MenuModel[]) {
    this._asides = v;
  }

  constructor(
    private _router: Router,

  ) { }

  ngOnInit() {
    this._setActiveClass();
  }

  private _setActiveClass() {
    const arr = this._router.url.split('/');
    let i = 2;
    let id;
    if (!(+arr[i])) {
      id = arr[i];
    } else {
      i++;
      id = arr[i];
    }

    setTimeout(() => {
      const index = this.asides.findIndex(item => item.id === id);

      if (index > -1) {
        $(`#${id}`).addClass('active');
      }
    }, 500);
  }

  public selectedCategory(e: any) {
    let id;
    if (typeof e === 'string') {
      id = e;
    } else {
      id = e.target.value;
    }

    $('.list-group-item').removeClass('active');

    const index = this.asides.findIndex(item => item.id === id);

    if (index > -1) {
      $(`#${id}`).addClass('active');
      const selectedItem = this.asides.filter(item => item.id === id)[0];
      this._router.navigate([selectedItem.path]);
    }
  }
}
