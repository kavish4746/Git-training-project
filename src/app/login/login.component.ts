import { Component, OnInit } from '@angular/core';
import { login_class } from '../login/login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arr:login_class[]=[];
  user_id:string;
  password:string;
  
  constructor(private _xyz:LoginService,private _r:Router) { }
  onLogin(){
    console.log(this.user_id,this.password);
    this._xyz.getUserLogin(new login_class(this.user_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0)
        {
          localStorage.setItem('user_id',this.user_id);
        prompt("","Login Successfully");
        console.log(localStorage.getItem('user_id'))
         this._r.navigate(['/viewproduct'])
        }
        else
        {
          prompt("","Invalid Password or Email_id");
        }
      }
    );
}
onforget(){
this._r.navigate(['/forget',this.user_id]);
}
  ngOnInit() {
  }
  onclicksignup()
  {
    this._r.navigate(['/signup']);
  }
}
