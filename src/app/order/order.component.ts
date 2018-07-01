import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { order_class } from '../order/order';
import { product_class } from '../viewproduct/product';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
x:number;
y:string;
order_id:string;
date:string;
amount:number;
fkp_id:number;
fkuser_id:number;
p_id:number;
orderarr:order_class[]=[];
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _xyz:OrderService) { }
  ngOnInit() {
    this.y=localStorage.getItem('user_id')
    //this.x=this._actroute.snapshot.params['p_id'];
    this._xyz.getallOrder(this.y).subscribe(
      (data:order_class[])=>{
        this.orderarr=data;
      }
    );
  }

}
