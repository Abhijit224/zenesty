import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { BeautyspaComponent } from './Components/CategoryComponents/beautyspa/beautyspa.component';
import { BleachComponent } from './Components/CategoryComponents/bleach/bleach.component';
import { BuyComponent } from './Components/CategoryComponents/buy/buy.component';
import { FaceComponent } from './Components/CategoryComponents/face/face.component';
import { HairComponent } from './Components/CategoryComponents/hair/hair.component';
import { MassageComponent } from './Components/CategoryComponents/massage/massage.component';
import { OfferComponent } from './Components/CategoryComponents/offer/offer.component';
import { PedimaniComponent } from './Components/CategoryComponents/pedimani/pedimani.component';
import { TheradingComponent } from './Components/CategoryComponents/therading/therading.component';
import { WaxingComponent } from './Components/CategoryComponents/waxing/waxing.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'offer',component:OfferComponent},
  {path:'bleach',component:BleachComponent},
  {path:'hair',component:HairComponent},
  {path:'massage',component:MassageComponent},
  {path:'threading',component:TheradingComponent},
  {path:'waxing',component:WaxingComponent},
  {path:'face',component:FaceComponent},
  {path:'pedimani',component:PedimaniComponent},
  {path:'beautyspa',component:BeautyspaComponent},
  {path:'buy',component:BuyComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
