import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http : HttpClient) { }

  getMyCustomJson = ()=> {
    return this.http.get('assets/customJson.json')
  }
}
