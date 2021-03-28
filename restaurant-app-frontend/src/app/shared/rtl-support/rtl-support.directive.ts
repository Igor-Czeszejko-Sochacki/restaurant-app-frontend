import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rtl]'
})
export class RtlSupportDirective implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(private el: ElementRef) {}
  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
