import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { posts } from '../mock-data/posts';

// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    // private _api: ApiService,
  ) { }

  public getPosts(opts?: any): Observable<any> {
    return of(posts);
  }
}
