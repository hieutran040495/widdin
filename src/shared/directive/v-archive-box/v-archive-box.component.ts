import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ArchiveBoxHelper } from './v-archive-box.helper';

@Component({
  selector: 'app-v-archive-box',
  templateUrl: './v-archive-box.component.html',
  styleUrls: ['./v-archive-box.component.scss']
})
export class VArchiveBoxComponent implements OnInit {
  public breadcrumbList: Array<any> = [];
  public _menu: Array<any> = [];

  constructor(
    private _router: Router,
    private _arvBoxHelper: ArchiveBoxHelper,
  ) { }

  ngOnInit() {
    this._buildMenu();
    this._buildBreadCrumb();
    this._listenChangeRoute();
  }

  public breadcrumbEvent(path: string) {
    this._router.navigate([path]);
  }

  private _buildMenu(url?: string) {
    let arr: Array<string> = [];
    let id: number;
    this._menu = [];

    if (url) {
      arr  = url.split('/');
    } else {
      arr  = this._router.url.split('/');
    }

    arr.map(item => {
      if (+item) {
        id = +item;
      }
    });

    if (id) {
      this._menu = this._arvBoxHelper.initMenu(id);
    } else {
      this._menu = this._arvBoxHelper.initMenu();
    }
  }

  private _buildBreadCrumb(url?: string) {
    let routerList;
    this.breadcrumbList = [];
    if (url) {
      routerList = url.split('/').splice(1);
    } else {
      routerList = this._router.url.split('/').splice(1);
    }

    let target: any;
    let path = '';

    routerList.forEach((router, index) => {
        target = this._menu.find(h => h.path === router);

      if (target) {
        if (target.name !== '') {
          if (index === 0) {
            path = `/${router}`;
          }

          if (index > 0) {
            path = `${path}/${router}`;
          }

          this.breadcrumbList.push({
            name: target.name,
            path: path,
          });
        }

        if (index <= routerList.length - 2) {
          this._menu = target.children;
        }
      }
    });
  }

  private _listenChangeRoute() {
    this._router.events.subscribe((router: any) => {
      const urlAfterRedirects = router.urlAfterRedirects;

      if (urlAfterRedirects && typeof urlAfterRedirects === 'string') {
        this._buildMenu(urlAfterRedirects);
        this._buildBreadCrumb(urlAfterRedirects);
      }
    });
  }
}
