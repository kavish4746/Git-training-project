import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product_class } from './viewproduct/product';

@Injectable({
  providedIn: 'root'
})
export class SimilarService {

  private url:string='http://Localhost:3000/similar/';
  constructor(private _http:HttpClient) { }
  
  similarProduct(fkcat_id:number,p_id:number)
  {
    return this._http.get(this.url+fkcat_id+"/"+p_id);
  }
}
