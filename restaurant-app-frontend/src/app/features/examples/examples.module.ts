import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { FEATURE_NAME, reducers } from './examples.state';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { TodosEffects } from './todos/todos.effects';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';
import { StockMarketEffects } from './stock-market/stock-market.effects';
import { StockMarketService } from './stock-market/stock-market.service';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { CrudComponent } from './crud/components/crud.component';
import { BooksEffects } from './crud/books.effects';
import { FormComponent } from './form/components/form.component';
import { FormEffects } from './form/form.effects';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { ExamplesEffects } from './examples.effects';
import { UserComponent } from './simple-state-management/components/user.component';
import { UserService } from './simple-state-management/user.service';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule,
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      ExamplesEffects,
      TodosEffects,
      StockMarketEffects,
      BooksEffects,
      FormEffects
    ])
  ],
  declarations: [
    ExamplesComponent,
    TodosContainerComponent,
    StockMarketContainerComponent,
    ParentComponent,
    ChildComponent,
    AuthenticatedComponent,
    CrudComponent,
    FormComponent,
    NotificationsComponent,
    UserComponent,
    ElementsComponent
  ],
  providers: [StockMarketService, UserService]
})
export class ExamplesModule {
  constructor() {}
}
