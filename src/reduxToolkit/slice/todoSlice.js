import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, name: "Muzammil", email: "muzammil@gmail.com"}]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.name = action.payload.name;
                todo.email = action.payload.email;
            }
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;