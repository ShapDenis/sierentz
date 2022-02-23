import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

const selectState = (state: RootState) => state.dataTable;

export const selectDataTable = () =>
    createSelector([selectState], (state) => {
        return state;
    });

export const getCharacter = createAsyncThunk(`/getDataTable`, async (_, thunkAPI) => {
    try {
        const response = await fetch(`./Database/testData.json`);
        return await response.json();
    } catch (e) {
        return thunkAPI.rejectWithValue("Failed to load Data Table")
    }
});

export const characterSlice = createSlice({
    name: "dataTable",
    initialState: {},
    reducers: {},
    extraReducers: {
        [getCharacter.fulfilled.type]: (state, action) => {
            return action.payload
        },
    },
})
export const dataTable = characterSlice.reducer;