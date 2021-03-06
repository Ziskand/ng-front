import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './../../components/login/login.component';
// import { CustomerComponent } from '../customer/components/customer/customer.component';
// import { CompanyComponent } from '../company/components/company/company.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    // LoginComponent
    // CustomerComponent, 
    // CompanyComponent
    ]
})
export class HomeModule { }
