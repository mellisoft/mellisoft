import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }
  createTest(data: any) {
    const url = API_URL.postTest;
    const api = this.http.post(url, data);
    return api;
  }
  uploadTest(data: any) {
    const url = API_URL.testImageUpload;
    const api = this.http.post(url, data);
    return api;
  }
  postCall(url: string, data: any, options?: any) {
    // let header = {
    //   headers: new HttpHeaders().set(
    //     'Authorization',
    //     `Bearer ${this.getToken()}`
    //   ),
    // };
    const api = this.http.post(url, data,).pipe(
      map((res: Response | any) => {
        return res;
      }),
      catchError((err) => this.handleError(err, data))
    );
    return api;
  }
  handleError(error: HttpErrorResponse, payload?: any) {
    const errorObj: any = {};
    if (error) {
      errorObj.keyword = 'API Error';
      errorObj.message = 'API FAIL';
      errorObj.payload = payload;
      errorObj.error = error;
      if (!error.url || error.url) {
        const logObj = { method: 'handleError', msg: 'Sync->', data: error };
        console.log(logObj, true);
      }
      const details = { detail: error, status: error.status };
      if (error.status === 500 || error.status === 504) {
        // this._snackBar.open(error.error.message, 'Undo', {
        //     duration: 3000
        //   })
        return this.emptyresponce();
      }
      if (error.status === 422) {
        // this._snackBar.open(error.error.message, 'Undo', {
        //     duration: 3000
        //   })
      }
      if (error && error.url && details.status == 401) {
        if (details.status === 401) {
            localStorage.clear();
          alert(
            'Your session got timed out. Please login again for a new session.'
          );
        }
      }
      return ;
    } else {
      return this.emptyresponce();
    }
  }
  emptyresponce(ignore?: any) {
    const observable = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('');
      }, 2000);
    });
    return observable;
  }
}
