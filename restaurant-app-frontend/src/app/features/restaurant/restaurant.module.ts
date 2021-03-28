import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, RestaurantRoutingModule],
  declarations: [RestaurantComponent]
})
export class RestaurantModule {}
