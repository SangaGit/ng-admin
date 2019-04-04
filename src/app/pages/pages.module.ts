import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import {FocusModule} from 'angular2-focus';

import { BrowserModule } from '@angular/platform-browser';
import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { OrderComponent } from "app/pages/Custom-Forms/order.component";

import { PagesRoutingModule } from './pages-routing.module';
import { SubscriberInfoComponent } from "app/pages/Custom-Forms/subscriber-info.component";
import{ RegistrationService} from '../services/registration.service';
import { WelcomeComponent } from "app/pages/welcome.component";
import { OrderConfimationComponent } from "app/pages/Custom-Forms/order-confimation.component";

// Angular 2 Input Mask
import { TextMaskModule } from 'angular2-text-mask';
import { PerchasedProductComponent } from "app/pages/Custom-Forms/perchased-product.component";


@NgModule({
  imports: [PagesRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            HttpModule,
            TextMaskModule,
            FocusModule.forRoot()],
  declarations: [
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    SubscriberInfoComponent,
    WelcomeComponent,
    OrderConfimationComponent,
    PerchasedProductComponent
  ],
  providers:[RegistrationService]
})
export class PagesModule { }
