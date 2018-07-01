import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { login_class } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {
  private url:string='http://Localhost:3000/viewprofile/';
  constructor(private _http:HttpClient) { }
  
  getAllUserByEmail_id(user_id:string)
  {
    return this._http.get(this.url+user_id);
  }
  updateUser(item:login_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.user_id,body,{headers:head1})
  }
}
