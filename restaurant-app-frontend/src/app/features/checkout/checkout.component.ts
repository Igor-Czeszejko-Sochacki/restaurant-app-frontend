import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

import { Checkout, checkout } from './checkout.data';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {
  restaurants: Checkout[] = checkout;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  openLink(link: string) {
    window.open(link, '_blank');
  }

}
