import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule,Http } from '@angular/http'; 
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { routing } from './app.routing';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { HeaderComponent } from './header.component';
import { EditprofileComponent } from './viewprofile/editprofile/editprofile.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { GetallproComponent } from './getallpro/getallpro.component';
import { OrderComponent } from './order/order.component';
import { SimilarComponent } from './similar/similar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ViewproductComponent,
    ViewprofileComponent,
    EditprofileComponent,
    ForgetComponent,
    SignupComponent,
    ChangepasswordComponent,
    GetallproComponent,
    OrderComponent,
    SimilarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
