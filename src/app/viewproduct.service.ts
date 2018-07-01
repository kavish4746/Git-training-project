import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product_class } from './viewproduct/product';

@Injectable({
  providedIn: 'root'
})
export class ViewproductService {
  private url:string='http://Localhost:3000/viewproduct/';
  private url1:string='http://Localhost:3000/productupdate/'
  constructor(private _http:HttpClient) { }

  getAllproduct(){
    return this._http.get(this.url);
  }
  getallMobile(cat_name:string){
    return this._http.get(this.url+cat_name)
  }
  updateproduct(soh:number,item:product_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url1+soh,body,{headers:head1})
  }
}
