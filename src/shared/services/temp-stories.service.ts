import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { stories } from '../mock-data/temp-stories';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateStoriesService {

  constructor(
    private _api: ApiService,
  ) { }

  public getStories(opts?: any): Observable<any> {
    return this._api.get('stories');
    // return of(stories)
  }

  public createStory(body) {
    return this._api.post('stories/store', body);
  }

  public updateStory(body) {
    return this._api.post(`stories/update`, body);
  }

  public deleteStory(body) {
    return this._api.post(`stories/delete`, body);
  }
}
