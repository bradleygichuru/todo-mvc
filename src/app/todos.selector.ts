import { createSelector } from "@ngrx/store";
import { Todo } from "./todo.reducer";
export const selectTodos = (state:Todo[])=> state;
