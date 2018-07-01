import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { order_class } from './order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url:string='http://Localhost:3000/order/';
  constructor(private _http:HttpClient) { }
  getallOrder(user_id:string)
  {
    return this._http.get(this.url+user_id);
  }
  
  addorder(item:order_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1})
}}
