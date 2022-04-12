import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks, startFetchPending, finishFetchPending } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    yield put(startFetchPending());
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
        console.error(error);
    }
    yield put(finishFetchPending());
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}