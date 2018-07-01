import { Injectable } from '@angular/core';
import { login_class } from './login/login';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {
  private url:string="http://Localhost:3000/forget/";
  constructor(private _http:HttpClient) { }

  getpassword(user_id:string){
    return this._http.get(this.url+user_id);
  }
}
