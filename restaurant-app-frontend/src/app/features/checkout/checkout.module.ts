import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
  imports: [CommonModule, SharedModule, CheckoutRoutingModule],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }