import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload];
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        updateTask: (state, action) => {
            const { id, title, description, completed } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.title = title;
                task.description = description;
            }
            
        }
    }
});


// Action creators are generated for each case reducer function
export const { addTask,deleteTask,updateTask } = taskSlice.actions;