import { Component, OnInit } from '@angular/core';
import { login_class } from '../../login/login';
import { ActivatedRoute } from '@angular/router';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';
import { ViewprofileService } from '../../viewprofile.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  arr:login_class[]=[];
  user_id:string;
  password:string;
  name:string;
  age:number;
  mob_no:number;
  city:string;
  address:string;
  Email:string;
  x:string;
  constructor(private _route:Router,private _actroute:ActivatedRoute,private _update:ViewprofileService) { }
  onsave(){
    this._update.updateUser(new login_class(this.user_id,this.password,this.name,this.age,this.mob_no,this.city,this.address)).subscribe(
      (data:any)=>{
        this._route.navigate(['/login'])
      }
    );
  }
  
  
  ngOnInit() {
    this.user_id=localStorage.getItem('user_id');
    this._update.getAllUserByEmail_id(this.user_id).subscribe(
      (data:login_class[])=>{
        this.user_id=data[0].user_id;
        this.password=data[0].password;
        this.name=data[0].name;
        this.age=data[0].age;
        this.mob_no=data[0].mob_no;
        this.city=data[0].city;
        this.address=data[0].address;
      }
    );
  }

}
