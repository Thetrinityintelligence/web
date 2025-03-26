import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { URL } from '../utill/common';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getRating() {
    return this.http.get(environment.serverEndpoint+URL.GET_RATING);
  }

  public getAllServices() {
    return this.http.get(environment.serverEndpoint+URL.GET_ALL_SERVICES);
  }
  public getAllClients() {
    return this.http.get(environment.serverEndpoint+URL.GET_ALL_CLIENTS);
  }
  public sendMessage(msgBody:any) {
    return this.http.post(environment.serverEndpoint+URL.SEND_MSG,msgBody);
  }
}
