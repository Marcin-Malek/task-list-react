import { takeLatest, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, toggleFetchPending } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    yield put(toggleFetchPending());
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
        console.error(error);
    }
    yield put(toggleFetchPending());
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}