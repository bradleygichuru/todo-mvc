import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, complete } from './todo.actions';
export type Todo = {
  name: string;
  done: boolean;
};
export const initialState: Todo[] = [];
export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state: Todo[], { todo }: { todo: Todo }) => [...state, todo]),
  on(removeTodo, (state: Todo[], { name }: { name: string }) =>
    state.filter((todo) => todo.name != name)
  ),
  on(complete, (state: Todo[], { name }: { name: string }) =>
    state.map((x) => {
      if (x.name == name) {
        x.done = true;
        return x;
      } else {
        return x;
      }
    })
  )
);
