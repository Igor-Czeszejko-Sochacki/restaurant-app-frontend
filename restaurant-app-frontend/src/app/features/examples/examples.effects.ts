import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { merge } from 'rxjs';
import { tap, distinctUntilChanged, filter } from 'rxjs/operators';

import { AppState, selectSettingsLanguage } from '../../core/core.module';
import { actionSettingsChangeLanguage } from '../../core/settings/settings.actions';

@Injectable()
export class ExamplesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router
  ) {}
}
