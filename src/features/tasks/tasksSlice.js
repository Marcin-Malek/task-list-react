import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        fetchPending: false,
    },
    reducers: {
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone
        },
        toggleFetchPending: (state) => {
            state.fetchPending = !state.fetchPending
        },
        fetchExampleTasks: () => { },
    }
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    toggleFetchPending,
} = tasksSlice.actions;


export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export const selectHideDone = state => selectTasksState(state).hideDone;

export const selectFetchPending = state => selectTasksState(state).fetchPending;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;

