import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { product_class } from './product';
import { ViewproductService } from '../viewproduct.service';
import { order_class } from '../order/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  p_id:number;
  name:string;
  price:number;
  img:string;
  color:string;
  mfg:string;
  fkcat_id:number;
  soh:number;
  prodarr:product_class[]=[];


  x:number;
  order_id:number;
  date:string;
  amount:number;
  fkp_id:number;
  fkuser_id:string;
  orderarr:order_class[]=[];
  constructor(private _abc:OrderService,private _actroute:ActivatedRoute,private _route:Router,private _xyz:ViewproductService) { }
  ondetails(item:product_class){
    this._route.navigate(['/getallpro',item.p_id,item])
  }
  onmobile(){
    this.prodarr.splice(0,this.prodarr.length);
    this._xyz.getallMobile('mobile').subscribe(
      (data:any[])=>{
        this.prodarr=data
      }
    );
  }
  onlaptop(){
    this.prodarr.splice(0,this.prodarr.length);
    this._xyz.getallMobile('laptop').subscribe(
      (data:any[])=>{
        this.prodarr=data
      }
    );
  }
onorder(item:product_class){
  // this._route.navigate(['/order',item.p_id,item]) 
  // this._abc.addorder(new order_class(this.order_id,this.date,this.amount,this.fkp_id,this.fkuser_id)).subscribe(
  //   (data:order_class[])=>{
  //     this.orderarr.push(new order_class(this.order_id,this.date,this.amount,this.fkp_id,this.fkuser_id));
  //   }
  // );
}
  onall(){
    this._xyz.getAllproduct().subscribe(
      (data:any[])=>{
        this.prodarr=data;
      }
    );

  }
  ngOnInit() {
    this._xyz.getAllproduct().subscribe(
      (data:any[])=>{
        this.prodarr=data;
      }
    );
  }

}
