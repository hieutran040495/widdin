import { Component, OnInit, Input } from '@angular/core';

import { TemplateAlbum } from 'src/shared/models/temp-album';
import { TemplateImage } from 'src/shared/models/temp-image';

@Component({
  selector: 'app-m-template03-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryMasterTemplate03Component implements OnInit {
  @Input('albums') albums: TemplateAlbum[];

  public galleryImages: TemplateImage[] = [];

  constructor() { }

  ngOnInit() {
    this._getAllImages();
  }

  public viewAlbum(id?: number) {
    this.galleryImages = [];

    if (!id) {
      this._getAllImages();
    } else {
      const images = this.albums.filter(item => id === item.id)[0].images;

      images.map(item => {
        this.galleryImages.push(new TemplateImage(item));
      });
    }

  }

  private _getAllImages() {
    if (this.albums.length > 0) {
      this.albums.map(item => {
        item.images.map(img => {
          this.galleryImages.push(new TemplateImage(img));
        });
      });
    }
  }

}
