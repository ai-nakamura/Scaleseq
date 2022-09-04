import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observable, of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

type Options = {
  headers?: { [header: string]: string | string[] };
  observe?: 'body' | 'events' | 'response';
  params?: { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url: string = '';

  constructor(private http: HttpClient) {}

  setBaseUrl(url: string) {
    this.url = url;
  }

  getCall(options: any): Observable<string> {
    return this.http.get(this.url + "/generate", {
      observe: 'body',
      params: options,
      responseType: 'text',
    });
  }
}
