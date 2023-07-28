import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from '../todo.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:Todo = {name:"",done:false};
  @Output() todoDone = new EventEmitter<string>();
  @Output() removeTodoEvent = new EventEmitter<string>();
  done(){
    this.todoDone.emit(this.todo.name);
  }
  removeTodo(){
    this.removeTodoEvent.emit(this.todo.name);
  }
}
