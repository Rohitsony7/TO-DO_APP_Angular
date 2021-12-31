import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../../model/Todo';
import { v4 as uuidV4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoTitle: string = '';

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  handelAdd() {
    const todo: Todo = {
      id: uuidV4(),
      title: this.todoTitle,
      date: new Date(),
      isCompleted: false,
    };

    this._todoService.addTodo(todo);
    this.todoTitle = '';
  }
}
