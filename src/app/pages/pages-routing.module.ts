import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { OrderComponent } from "app/pages/Custom-Forms/order.component";
import { SubscriberInfoComponent } from "app/pages/Custom-Forms/subscriber-info.component";
import { WelcomeComponent } from "app/pages/welcome.component";
import { OrderConfimationComponent } from "app/pages/Custom-Forms/order-confimation.component";
import { PerchasedProductComponent } from "app/pages/Custom-Forms/perchased-product.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: '404',
        component: p404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: p500Component,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          title: 'Welcome Page'
        }
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: 'Order Page'
        }
      },
      {
        path:'subscriber',
        component:SubscriberInfoComponent,
        data:{
          title:'Subscriber info page'
        }
      },
      {
        path:'orderconfirm',
        component:OrderConfimationComponent,
        data:{
          title:'Order confirm page'
        }
      },
      {
        path:'perchasedProducts',
        component:PerchasedProductComponent,
        data:{
          title:'Perchased Products Info'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
