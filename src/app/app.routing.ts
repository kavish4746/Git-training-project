import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './viewprofile/editprofile/editprofile.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { GetallproComponent } from './getallpro/getallpro.component';
import { OrderComponent } from './order/order.component';
const arr:Routes=[
    
            {path:'',component:LoginComponent},
            {path:'login',component:LoginComponent},
            {path:'viewproduct',component:ViewproductComponent},
            {path:'viewprofile',component:ViewprofileComponent},
            {path:'editprofile',component:EditprofileComponent},
            {path:'forget/:user_id',component:ForgetComponent},
            {path:'signup',component:SignupComponent},
            {path:'changepassword/:user_id',component:ChangepasswordComponent},
            {path:'getallpro/:p_id',component:GetallproComponent},
            {path:'order',component:OrderComponent},

];    

export const routing=RouterModule.forRoot(arr);