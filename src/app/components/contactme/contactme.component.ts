import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Userinfo } from '../../interfaces/userinfo';
import { ContactusService } from '../../services/contactus.service';

@Component({
  selector: 'app-contactme',
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
title="contact me";
contactusService: ContactusService;
constructor(serviceRef: ContactusService){
  this.contactusService=serviceRef;
}

sendRequest(contactusForm:any){
  // service call to save request info in contactus table
  //upon success trigger call to function app url and send email
 let emailFunctionAppUrl="";
 let userinfo: Userinfo={
   FullName:contactusForm.value.fullname,
   PhoneNumber: contactusForm.value.phonenumber,
   Email: contactusForm.value.email,
   Message: contactusForm.value.message
 };

 this.contactusService.sendContactRequest(userinfo).subscribe(res=>{
   console.log(res);
   if(res){
    
   }
 });

}
}
