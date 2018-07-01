import { Component, OnInit } from '@angular/core';
import { login_class } from '../login/login';
import { ViewprofileService } from '../viewprofile.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
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
  constructor(private _route:Router,private _data:ViewprofileService,private _acroute:ActivatedRoute) { }
  onEdit(item:login_class){
    this._route.navigate(['/editprofile'])
  }
  onchangepass(){
    this._route.navigate(['/changepassword',this.user_id])
  }
  
  ngOnInit() {
    this.user_id=localStorage.getItem('user_id');
    this._data.getAllUserByEmail_id(this.user_id).subscribe(
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
