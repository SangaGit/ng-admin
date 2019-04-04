import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { EqualTextValidator } from "angular2-text-equality-validator";
import { SettingsRoutingModule } from './settings-routing.module';
import{ RegistrationService} from '../services/registration.service';
import { RegisterComponent } from "app/pages/register.component";
// Angular 2 Input Mask
import { TextMaskModule } from 'angular2-text-mask';
import { EcgAccountInfoComponent } from "./ecg-account-info.component";
import { GettingStartWithEcgComponent } from "app/settings/getting-startwith-ecg.component";
import { SubscriberInfoComponent } from "app/settings/subscriber-info.component";
import { MedicalInfoComponent } from "app/settings/medical-info.component";
import { BillingInfoComponent } from "app/settings/billing-info.component";
import { DeliveryInfoComponent } from "app/settings/delivery-info.component";
import { PaymentInfoComponent } from "app/settings/payment-info.component";
import { PagesModule } from "app/pages/pages.module";
import { EditAccountComponent } from "app/settings/edit-account.component";



@NgModule({
  imports: [SettingsRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            HttpModule,
            TextMaskModule,
            PagesModule],
  declarations: [
    EcgAccountInfoComponent,
    GettingStartWithEcgComponent,
    SubscriberInfoComponent,
    MedicalInfoComponent,
    BillingInfoComponent,
    DeliveryInfoComponent,
    PaymentInfoComponent,
    EditAccountComponent
  ],
  providers:[RegistrationService]
})
export class SettingsModule { }
