import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from '../pages/register.component';
import { EcgAccountInfoComponent } from "./ecg-account-info.component";
import { GettingStartWithEcgComponent } from "app/settings/getting-startwith-ecg.component";
import { SubscriberInfoComponent } from "app/settings/subscriber-info.component";
import { MedicalInfoComponent } from "app/settings/medical-info.component";
import { BillingInfoComponent } from "app/settings/billing-info.component";
import { DeliveryInfoComponent } from "app/settings/delivery-info.component";
import { PaymentInfoComponent } from "app/settings/payment-info.component";
import { EditAccountComponent } from "app/settings/edit-account.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ECG Settings Pages'
    },
    children: [
      {
        path: 'edit',
        component: EditAccountComponent,
        data: {
          title: 'Edit Account Page'
        }
      },
      {
        path: 'ecgAccInfo',
        component: EcgAccountInfoComponent,
        data: {
          title: 'Ecg Account Info Page'
        }
      },
      {
        path: 'gettingStartEcg',
        component: GettingStartWithEcgComponent,
        data: {
          title: 'Getting start ecg Page'
        }
      },
      {
        path: 'subscriberInfo',
        component: SubscriberInfoComponent,
        data: {
          title: 'Subscriber Info Page'
        }
      },
      {
        path: 'medicalInfo',
        component: MedicalInfoComponent,
        data: {
          title: 'Medical Info Page'
        }
      },
      {
        path: 'billingInfo',
        component: BillingInfoComponent,
        data: {
          title: 'Billing Info Page'
        }
      },
      {
        path: 'deliveryInfo',
        component: DeliveryInfoComponent,
        data: {
          title: 'Delivery Info Page'
        }
      },
      {
        path: 'paymentInfo',
        component: PaymentInfoComponent,
        data: {
          title: 'Payment Info Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
