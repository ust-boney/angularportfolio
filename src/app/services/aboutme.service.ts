import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {
private _http:HttpClient;
private profileApiUrl ="https://localhost:7255/";
  constructor(httpRef:HttpClient) {
    this._http=httpRef;
   }
  
   getUserProfileDetails(){
    return this._http.get(this.profileApiUrl+"api/UserProfile/1");
   }
}
