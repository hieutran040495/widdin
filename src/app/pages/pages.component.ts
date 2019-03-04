import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

import { pageColors } from '../../shared/mock-data/page-color';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: [
    '../../styles/pages/index.scss',
    './pages.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PagesComponent implements OnInit {
  private _pageColors = pageColors;

  constructor(
  ) { }

  ngOnInit() {
    $('body').addClass('v-gl-col--elegant');
  }

  // Set color of page
  public setColor(col) {
    const body = $('body');
    const nameOfClass = 'v-gl-col--';

    this._pageColors.map(item => {
      if (col === item) {
        body.addClass(`${nameOfClass}${col}`);
        this._removeClass(body, col, nameOfClass);
      }
    });
  }

  private _removeClass(e: any, col: string, nameOfClass: string) {
    const classNames = e.attr('class');

    if (classNames) {
      classNames.split(' ').map(item => {
        if (item !== `${nameOfClass}${col}`) {
          e.removeClass(item);
        }
      });
    }
  }
}
