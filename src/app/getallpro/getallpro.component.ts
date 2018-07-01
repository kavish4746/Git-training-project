import { Component, OnInit } from '@angular/core';
import { product_class } from '../viewproduct/product';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { GetallproService } from '../getallpro.service';
import { SimilarService } from '../similar.service';
import { OrderService } from '../order.service';
import { ViewproductService } from '../viewproduct.service';
import { order_class } from '../order/order';

@Component({
  selector: 'app-getallpro',
  templateUrl: './getallpro.component.html',
  styleUrls: ['./getallpro.component.css']
})
export class GetallproComponent implements OnInit {

  constructor(private _actroute:ActivatedRoute,private _route:Router,private _xyz:GetallproService,private _abc:SimilarService,private _pro:ViewproductService,private _order:OrderService) { }
  p_id:number;
  name:string;
  price:number;
  img:string;
  color:string;
  mfg:string;
  fkcat_id:number;
  soh:number;
  arr1:product_class[]=[];
  arr2:product_class[]=[];
  x:number;
  qty:number=1;
  o_id:number=101;
  date1:string='2018-7-1';
  amount:number;
  q:number;
  onorder(){
    this.amount=this.qty*this.price;
    this.q=this.soh-this.qty;
    this._pro.updateproduct(this.q,this.arr1[0]).subscribe(
      (data:product_class[])=>{
        this._order.addorder(new order_class(this.o_id,this.date1,this.amount,this.p_id,localStorage.getItem('user_id'))).subscribe(
          (data:order_class[])=>{
            this._route.navigate(['/order']);
          }
        );

      }
    );
  }
  ondetails(item:product_class){
    this.p_id=item.p_id;
    console.log(this.p_id);
    //this._route.navigate(['/getallpro',item.p_id,item])
    this._xyz.getAllproductById(this.p_id).subscribe(
      (data:product_class[])=>{
          this.arr1=data;
          this.name=data[0].name;
          this.price=data[0].price;
          this.img=data[0].img;
          this.color=data[0].color;
          this.mfg=data[0].mfg;
          this.fkcat_id=data[0].fkcat_id;
          this.soh=data[0].soh;
          this._abc.similarProduct(this.fkcat_id,this.p_id).subscribe(
            (data:product_class[])=>{
              this.arr2=data;
            }
          );
      }
    );
  }
  
  ngOnInit() {
    this._actroute.params.subscribe(
      (x: Params) => {
        this.p_id = x['p_id'];
      }
    );
    console.log(this.p_id);
    this._xyz.getAllproductById(this.p_id).subscribe(
      (data:product_class[])=>{
          this.arr1=data;
          this.name=data[0].name;
          this.price=data[0].price;
          this.img=data[0].img;
          this.color=data[0].color;
          this.mfg=data[0].mfg;
          this.fkcat_id=data[0].fkcat_id;
          this.soh=data[0].soh;
          this._abc.similarProduct(this.fkcat_id,this.p_id).subscribe(
            (data:product_class[])=>{
              this.arr2=data;
            }
          );
      }
    );
  }

}
