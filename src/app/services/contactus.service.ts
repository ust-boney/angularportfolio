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

  private apiContactRequestUrl="https://requestinfoapi-fwa9ahd0fgaubtfz.eastus-01.azurewebsites.net/api/contactrequests";
  
  sendEmailNotify(name:string,email:string, message:string){
    let apiEmailNotifyUrl="https://emailackfuncapp.azurewebsites.net/api/HttpTriggerEmail?name="+name+"&email="+email+"&message="+message;
    this._http.get(apiEmailNotifyUrl).subscribe(res=>{
      console.log(res);
      console.log("Your request has been submitted successfully!");
    });
   }

   sendContactRequest(userinfo: Userinfo){
   
    return this._http.post(this.apiContactRequestUrl,userinfo).subscribe(res=>{
      console.log(res);
      if(res){
        this.sendEmailNotify(userinfo.FullName,userinfo.Email, userinfo.Message)
      }
    });
   }

 
}
