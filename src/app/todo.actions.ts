import { Todo } from "./todo.reducer";
import { createAction, props } from "@ngrx/store";
export const addTodo = createAction('[TODO] added',props<{todo:Todo}>());
export const complete = createAction('[TODO] done',props<{name:string}>())
export const removeTodo = createAction('[TODO] done',props<{name:string}>())



