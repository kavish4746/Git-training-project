import { Component, OnInit } from '@angular/core';
import { login_class } from '../login/login';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
  constructor(private _xyz:SignupService,private _route:Router) { }

  ngOnInit() {
  }
  onsignup(){
    this._xyz.addUser(new login_class(this.user_id,this.password,this.name,this.age,this.mob_no,this.city,this.address)).subscribe(
      (data:login_class[])=>{
        console.log(data);
        this.arr.push(new login_class(this.user_id,this.password,this.name,this.age,this.mob_no,this.city,this.address));
        this._route.navigate(['/login']);
      });
  }

}
