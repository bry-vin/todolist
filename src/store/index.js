import {configureStore} from "@reduxjs/toolkit"
import {todoReducer, changeTermToAdd, addTodoItem, deleteTodoItem, changeEditStatus, editTodoItem} from "./slices/todoSlice";

const store = configureStore({
    reducer : {
        todos : todoReducer
    }
});

export {store, changeTermToAdd, addTodoItem, deleteTodoItem, changeEditStatus, editTodoItem};