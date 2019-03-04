import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

import { environment } from '../environments/environment';
import { RootScopeService } from './services/root-scope';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _api: ApiService,
    private _rootScope: RootScopeService,
  ) {
    this._api.apiUrl = environment.api_url;
  }

  ngOnInit() {
    if (!this._rootScope.hasCredential()) {
      this._rootScope.fetchLocalStorageData();
    }
  }
}
