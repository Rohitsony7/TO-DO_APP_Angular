import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../../model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  faTrashAlt = faTrashAlt;

  constructor(private _todoSerive: TodoService) {}

  ngOnInit(): void {
    this._todoSerive.getTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  changeStatus(todo: Todo) {
    this._todoSerive.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    this._todoSerive.deleteTodo(todo);
  }
}
