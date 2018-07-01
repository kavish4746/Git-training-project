import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private _route:Router) { }
onviewpro(){
  this._route.navigate(['/viewprofile'])
}
onorder(){
  this._route.navigate(['/order'])
}
  ngOnInit() {
  }

}
