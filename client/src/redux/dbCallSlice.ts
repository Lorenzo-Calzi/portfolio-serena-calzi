import { createSlice } from "@reduxjs/toolkit";

const dbCallSlice = createSlice({
    name: "dbCall",
    initialState: 0,
    reducers: {
        setValue: (state, action) => {
            return action.payload;
        }
    }
});

export const { setValue } = dbCallSlice.actions;

export default dbCallSlice.reducer;
