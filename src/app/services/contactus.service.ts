import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userinfo } from '../interfaces/userinfo';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private _http:HttpClient;
  constructor(httpRef:HttpClient) {
     this._http= httpRef;
   }

  private apiUrl="";
   sendContactRequest(userinfo: Userinfo){
     return this._http.post(this.apiUrl,userinfo);
   }
}
