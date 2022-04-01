import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: (state) => { state.hideDone = !state.hideDone },
    }
});

export const { addTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = ({ tasks }) => tasks;
export default tasksSlice.reducer;

