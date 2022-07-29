import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt'
import { MaterialModule } from 'src/Material/material/material.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BannerComponent } from './Components/banner/banner.component';
import { HomeComponent } from './Components/home/home.component';
import { VideoareaComponent } from './Components/videoarea/videoarea.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { OfferComponent } from './Components/CategoryComponents/offer/offer.component';
import { TestInterceptor } from './AppInterceptors/test.interceptor';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    VideoareaComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    OfferComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers: [
     { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
 

  bootstrap: [AppComponent]
})
export class AppModule { }
