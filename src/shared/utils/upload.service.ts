import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'AccessToken': 'wOXcreOf5WXBJh4sMWRnpOFaamSvW2iqDOUK1ITzLQxAPA5Cquf1RtB5YyqC9KOX'
  })
};

@Injectable()
export class UploaderService {

  // private _apiUrl: string;
  // public get apiUrl(): string {
  //   return this._apiUrl;
  // }
  // public set apiUrl(v: string) {
  //   this._apiUrl = v;
  // }
  private apiUrl = 'http://ec2-54-188-1-247.us-west-2.compute.amazonaws.com/api';

  constructor (
    private _http: HttpClient,
  ) {}
  /**
   * @param url string
   * @param files Array {key, value}
   * @param params Object
   */
  public _getFormData(files: Array<any> = [], params: any = {}) {
    const formData: FormData = new FormData();

    files.map(item => {
      if (item.key) {
        formData.append(item.key, item.value);
      }
    });

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key]);
      }
    }

    return formData;
  }

  public store(url: string, files: any[], params: any = {}): Observable<any> {
    const formData = this._getFormData(files, params);
    const path = `${this.apiUrl}/${url}`;

    return this._http
      .post(path, formData, httpOptions)
      .pipe(
        map((response: Response) => {
          return response;
        })
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(errors: HttpErrorResponse) {
    switch (errors.status) {
      case 400:
        return throwError('Có lỗi trong lúc nhập');
      case 401:
        return throwError('Không thể xác thực bạn');
      case 403:
        return throwError('Không thể xác thực bạn');
      case 405:
        return throwError('Sai phương thức');
      default:
      return throwError('Trường hợp xấu đã xảy ra, vui lòng thử lại sau.');
    }
  }
}
