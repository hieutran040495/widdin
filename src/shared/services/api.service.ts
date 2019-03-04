import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { RootScopeService } from '../../app/services/root-scope';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiUrl: string;
  public get apiUrl(): string {
    return this._apiUrl;
  }
  public set apiUrl(v: string) {
    this._apiUrl = v;
  }

  constructor(
    private _http: HttpClient,
    private _rootScope: RootScopeService,
  ) { }

  private _generateHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });

    if (this._rootScope.hasCredential()) {
      headers = headers.append('AccessToken', this._rootScope.token);
    }

    return headers;
  }

  public get(url: string, opts?: any): Observable<any> {
    const headers = this._generateHeaders();
    const path = `${this.apiUrl}/${url}`;

    return this._http
      .get(path, {
        headers: headers,
        // search: params
      })
      .pipe(
        map((response: Response) => {
          return response;
        })
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  public post(url: string, body?: any): Observable<any> {

    const headers = this._generateHeaders();
    const path = `${this.apiUrl}/${url}`;

    return this._http
      .post(path, body, {
        headers: headers
      })
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
