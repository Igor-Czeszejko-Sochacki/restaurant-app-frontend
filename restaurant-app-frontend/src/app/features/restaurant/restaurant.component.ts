import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

import { Restaurant, restaurants } from './restaurant.data';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[] = restaurants;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  openLink(link: string) {
    window.open(link, '_blank');
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }


}

@Component({
  selector: 'app-restaurant',
  templateUrl: 'dialog-add-to-checkout.html',
  styleUrls: ['./restaurant.component.scss'],

})
export class DialogElementsExampleDialog {
  constructor(public dialog: MatDialog) { }
  closeDialog() {
    this.dialog.closeAll();
  }
}

