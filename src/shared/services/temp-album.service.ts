import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tempAlbum } from '../mock-data/temp-album';
import { albumImages } from '../mock-data/temp-album-images';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateAlbumService {

  constructor(
    private _api: ApiService,
  ) { }

  public getAlbum(opts?: any) {
    return this._api.get('albums', opts);
  }

  public updateAlbum(body: any) {
    return this._api.post('albums/update', body);
  }

  public showAlbum(id: number) {
    return this._api.get(`albums/show?id=${id}`);
  }

  public deleteAlbum(body) {
    return this._api.post(`albums/delete`, body);
  }
}
