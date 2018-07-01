import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ForgetService } from '../forget.service';
import { login_class } from '../login/login';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
user_id:string;
password:string;
x:string;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _abc:ForgetService) { }
  ondone(){
    this._route.navigate(['/login']);
  }
  ngOnInit() {
    this.x=this._actroute.snapshot.params['user_id'];
    this._abc.getpassword(this.x).subscribe(
      (data:login_class[])=>{
        this.user_id=data[0].user_id;
        this.password=data[0].password;
       
      }
    );
  }

}
