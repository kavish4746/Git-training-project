import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product_class } from './viewproduct/product';


@Injectable({
  providedIn: 'root'
})
export class GetallproService {
  private url:string='http://Localhost:3000/getallpro/';
  constructor(private _http:HttpClient) { }
  
  getAllproductById(p_id:number)
  {
    return this._http.get(this.url+p_id)
  }
}