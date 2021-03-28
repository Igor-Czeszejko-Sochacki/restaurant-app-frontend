import { selectTodosFilter } from './../todos.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from '../../../../core/core.module';

import * as todoActions from '../todos.actions';
import { Todo, TodosFilter } from '../todos.model';
import { selectTodos, selectRemoveDoneTodosDisabled } from '../todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  todos$: Observable<Todo[]>;
  filter$: Observable<TodosFilter>;
  removeDoneDisabled$: Observable<boolean>;
  newTodo = '';

  constructor(
    public store: Store,
    public snackBar: MatSnackBar,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTodos));
    this.filter$ = this.store.pipe(select(selectTodosFilter));
    this.removeDoneDisabled$ = this.store.pipe(
      select(selectRemoveDoneTodosDisabled)
    );
  }

  get isAddTodoDisabled() {
    return this.newTodo.length < 4;
  }

  onNewTodoChange(newTodo: string) {
    this.newTodo = newTodo;
  }

  onNewTodoClear() {
    this.newTodo = '';
  }

  onAddTodo() {
    this.store.dispatch(todoActions.actionTodosAdd(this.newTodo));

    this.newTodo = '';
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(todoActions.actionTodosToggle({ id: todo.id }));
  }

  onRemoveDoneTodos() {
    this.store.dispatch(todoActions.actionTodosRemoveDone());
  }

  onFilterTodos(filter: TodosFilter) {
    this.store.dispatch(todoActions.actionTodosFilter({ filter }));
  }
}
