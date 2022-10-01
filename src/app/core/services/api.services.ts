import { Inject, Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
// import { _throw as throwError, _throw } from 'rxjs/observable/throw';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { BASE_URL_TOKEN } from './config';
 

declare const $: any; 
@Injectable()
export class ApiService {

 

  constructor(
    private readonly _httpClient: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) { 


  }
 
 
  
  get(url: string) { 
    return this.request(`${this.baseUrl}/${url}`, 'GET');
  }

  post(url: string, body: Object) { 
    return this.request(`${this.baseUrl}/${url}`, 'POST', body);
  }

   
  put(url: string, body: Object) { 
    return this.request(`${this.baseUrl}/${url}`, 'PUT', body);
  }

  patch(url: string, body: Object) { 
    return this.request(`${this.baseUrl}/${url}`, 'PATCH', body);
  }

  delete(url: string) { 
    return this.request(`${this.baseUrl}/${url}`, 'DELETE');
  }

  request(reqUrl: string, method: string, body?: Object): Observable<any> {
    const url = `${reqUrl}`; // `${API_URL}/${reqUrl}`;
 
    //const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290QGxvY2FsaG9zdCIsImlhdCI6MTYyNTQ2NDgwMCwiZXhwIjoxNjI1NTUxMjAwfQ.3A4xsuD7vZ6PlqtZF_-os6bTH5RI4l8GNmnBZhZYO6TEP7B-DUcMONH0bKZlTZzU5FfDi7mhCev-zsFzj0VsaA';
    let headers = new HttpHeaders();

   

    if (!headers.has('Content-Type')) {
      headers = headers.set('Content-Type', 'application/json');
    }

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // Access-Control-Allow-Origin = http://localhost:4200
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Access-Control-Allow-Credentials', 'true');
    // headers = headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST,OPTIONS, PUT, PATCH, DELETE');
    headers = headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type');


    const params = new HttpParams();
    // params = params.set('Authorization', 'Token' + this.auth.getToken());
    // params = params.set('Authorization', 'Token 5f3e92df8f973ccbbae3ef7fc0a3231322ceb87e');


    const reqOpt = {
      body: body ? body : {},
      headers
    };

    // if (body) { } else {
    //   delete reqOpt.body;
    // }
    // if (at) { } else {
    //   delete reqOpt.params;
    // }
    return this._httpClient.request<any>(method, url, reqOpt)
      .pipe(
        tap(data => {
          // console.log('server data:', data);
        }),
        catchError(this.handleError(url))
      );
  }


 
  private handleError(operation: string) {
    return (err: any) => {
      let errResp = {};
      if (err instanceof HttpErrorResponse) {
        errResp = {
          op: operation,
          status: err.status,
          statusText: err.statusText,
          error: err.error.error
        };
      }
      if (err.status === 401) {
        //on no access given show error
      }
      return throwError(errResp);
    };
  }


 




}
