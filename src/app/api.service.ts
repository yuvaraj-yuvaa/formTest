import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private __postURL = "http://localhost:3000/";

  constructor(private http: Http) { }

  getTestPost(data:string): Observable<any> {
    return this.http
      .get(this.__postURL+data)
      .map((response: Response) => {
        return response.json();
        
      })
      .catch(this.handleError);
  }
  postData(data:string,params:any): Observable<any> {
    return this.http.post(this.__postURL+data,params)      
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }
  putData(data:string,params:any): Observable<any> {
    return this.http.put(this.__postURL+data,params)      
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}
