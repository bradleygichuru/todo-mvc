import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.reducer';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
 
  @Input() todo: Todo = { name: '', done: false };
  name = new FormControl(this.todo.name);
  @Output() todoDone = new EventEmitter<string>();
  @Output() removeTodoEvent = new EventEmitter<string>();
  @Output() editNameEvent = new EventEmitter<{oldName:string;newName:string}>();
  edit = false;
  done() {
    this.todoDone.emit(this.todo.name);
  }
  removeTodo() {
    this.removeTodoEvent.emit(this.todo.name);
  }
  toogleEdit(){
    this.edit = !this.edit;
  }
  editTodo(){
    this.editNameEvent.emit({oldName:this.todo.name,newName:this.name.value as unknown as string});
    this.edit=false;
  }
}
