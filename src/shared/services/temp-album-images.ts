import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateAlbumImagesService {

  constructor(
    private _api: ApiService,
  ) { }

  public getDetailAlbum(id: number) {
    return this._api.get(`images?user_album_id=${id}`);
  }

  public addImages(body) {
    return this._api.post('images/store', body);
  }

  public deleteImages(body) {
    return this._api.post(`images/delete`, body);
  }
}
