import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Todo {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todoTask of todoList$ | async">
        {{ todoTask.title }}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]>

  constructor(
    private _http: HttpClient
  ) {}

  ngOnInit() {

    this.todoList$ = this._http.get<Todo[]>('http://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
