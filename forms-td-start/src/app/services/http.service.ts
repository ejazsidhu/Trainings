import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serverURL = 'https://jsonmock.hackerrank.com/api/';

  constructor(private http:HttpClient) { }

  getWheather(cityName: string) {
    return this.http.get(`${this.serverURL}weather?name=${cityName}`)
  }
}
