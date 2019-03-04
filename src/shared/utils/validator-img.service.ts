import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorImage {
  private _maxSize = 12582912;

  constructor(
  ) { }

  public nameImage(evt: any) {
    const image: any = evt.target.files[0];
    return !!!(image.name.search(/(\.jpg|\.jpeg|\.png)$/i) <= 0);
  }

  public dimensionImage(evt: any, imageMinWidth: number, imageMinHeight: number, callback) {
    const file: any = evt.target.files[0];
    let result;

    const fr = new FileReader;

    fr.onload = function () {
      const img = new Image;
      img.onload = function () {
        if (img.width < imageMinWidth || img.height < imageMinHeight) {
          result = false;
        } else {
          result =  true;
        }

        callback(result);
      };

      img.src = fr.result.toString();
    };

    fr.readAsDataURL(file);
  }

  public sizeImage(evt: any) {
    const image: any = evt.target.files[0];
    return !!!(image.size > 0 && image.size > this._maxSize);
  }
}
