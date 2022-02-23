import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {dataTable} from "../slice/dataTable";

const rootReducer = combineReducers({dataTable});

export const index = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof index.getState>;