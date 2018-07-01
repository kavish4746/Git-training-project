import { Component, OnInit } from '@angular/core';
import { login_class } from '../login/login';
import { ActivatedRoute } from '@angular/router';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';
import { ViewprofileService } from '../viewprofile.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  arr:login_class[]=[];
  user_id:string;
  password:string;
  x:string;
  constructor(private _route:Router,private _actroute:ActivatedRoute,private _update:ViewprofileService) { }
  onchange(){
    this._update.updateUser(new login_class(this.user_id,this.password)).subscribe(
      (data:login_class[])=>{
        this._route.navigate(['/viewproduct'])
      }
    );
  }
  ngOnInit() {
    this.user_id=localStorage.getItem('user_id');
    this._update.getAllUserByEmail_id(this.user_id).subscribe(
      (data:login_class[])=>{
        this.user_id=data[0].user_id;
        this.password=data[0].password;
      }
    );
  }
}
