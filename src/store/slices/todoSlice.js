import {createSlice, nanoid} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState : {
        termToAdd : "",
        termToEdit : "",
        data : [],
    },
    reducers : {
        changeTermToAdd(state, action){
            state.termToAdd = action.payload;
        },
        addTodoItem(state, action){
            state.data.push({
                id : nanoid(),
                name: action.payload,
                edit : false
            })
            state.termToAdd = "";
        },
        deleteTodoItem(state, action){
           const updatedTodoList = state.data.filter((item)=>{
                return item.id !== action.payload
            });

            state.data = updatedTodoList;
        },
        changeEditStatus(state, action){
            state.data.map((todoItem) => {
                if(todoItem.id === action.payload){
                    todoItem.edit = !todoItem.edit;
                }

                return null;
            })
        },
        editTodoItem(state, action){
            state.data.map((todoItem) => {
                if(todoItem.id === action.payload.id){
                    todoItem.name = action.payload.name;
                    todoItem.edit = false;
                }

                return null;
            })
        }
    }
});

export const todoReducer = todoSlice.reducer;
export const {changeTermToAdd, addTodoItem, deleteTodoItem, changeEditStatus, editTodoItem} = todoSlice.actions;