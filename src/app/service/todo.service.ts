import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'To do DSA ',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '222',
        title: 'To do Angular course ',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '333',
        title: 'To do Node JS Course ',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        singleTodo.isCompleted = !singleTodo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex((obj) => {
      return obj.id == todo.id;
    });

    console.log(index + ': ' + todo.id);
    this.todos.splice(index, 1);
  }
}
