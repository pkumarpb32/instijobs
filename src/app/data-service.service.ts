import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private _http: HttpClient) { }

  public post(url:string, body:any){{
    return this._http.post(url, body);
  }
  }
}
