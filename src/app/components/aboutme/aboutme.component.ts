import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../../services/aboutme.service';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit {
private _service: AboutmeService;
userDetails:any;
constructor(serviceRef: AboutmeService){
    this._service= serviceRef;
}
  ngOnInit(): void {
    this._service.getUserProfileDetails().subscribe(res=>{
      this.userDetails= res;
      console.log(this.userDetails);
    })
  }


}
