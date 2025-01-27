import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {
private _http:HttpClient;
private profileApiUrl ="https://profileapi-h6dnb3fjg8brhhh9.eastus-01.azurewebsites.net/";
  constructor(httpRef:HttpClient) {
    this._http=httpRef;
   }
  
   getUserProfileDetails(){
    return this._http.get(this.profileApiUrl+"api/UserProfile/1");
   }
}
