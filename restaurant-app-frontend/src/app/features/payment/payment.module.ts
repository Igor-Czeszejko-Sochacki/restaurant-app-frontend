import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';


@NgModule({
  imports: [CommonModule, SharedModule, PaymentRoutingModule],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
