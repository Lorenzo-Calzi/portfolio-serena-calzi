import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        loaderVisibility: false
    },
    reducers: {
        toggleLoader: state => {
            state.loaderVisibility = !state.loaderVisibility;
        }
    }
});

export const { toggleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
