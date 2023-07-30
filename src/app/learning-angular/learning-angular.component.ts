import { Component } from '@angular/core';
import { Todo } from '../todo.reducer';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-learning-angular',
  templateUrl: './learning-angular.component.html',
  styleUrls: ['./learning-angular.component.css']
})
export class LearningAngularComponent {

  name = new FormControl('');
  todos:Todo[] = [];
  addTodo(){
    this.todos = [...this.todos,{name:this.name.value as string,done:false}];
  }
  removeTodo(name:string){
    this.todos = this.todos.filter((todo) => todo.name != name);

  }
  complete(name:string){
    this.todos = this.todos.map((x) => {
      if (x.name == name) {
        x.done = !x.done;
        return x;
      } else {
        return x;
      }
    })

  }
  saveTodoName(payload: { oldName: string; newName: string; }){
    console.log(payload);
    this.todos = this.todos.map((x) => {
      if (x.name == payload.oldName) {
        x.name = payload.newName;
        return x;
      } else {
        return x;
      }
    })

  }
}
