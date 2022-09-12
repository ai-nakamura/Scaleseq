import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

// TODO: Make utility file for all Types and Helper functions
type FrequencyParams = {
  freq: number;
  duration: number;
  scaleType: 'major' | 'minor';
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl: string = '';

  constructor(private http: HttpClient) {}

  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  fetchFrequencies(params: FrequencyParams): Observable<number[][]> {
    const req: Observable<string> = this.http.get(this.baseUrl + '/generate', {
      observe: 'body',
      params,
      responseType: 'text',
    });

    return req.pipe(
      map((data) => {
        const parsedData = JSON.parse(data);
        if (this.isFreqData(parsedData)) {
          return parsedData;
        }
        throw new Error('/generate returned unknown data');
      })
    );
  }

  isFreqData(value: unknown): value is number[][] {
    return Array.isArray(value) && value.every(Array.isArray) && typeof value[0][0] === 'number';
  }
}
