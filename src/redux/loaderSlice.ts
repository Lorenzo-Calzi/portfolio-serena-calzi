import {createSlice} from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loader: false,
    },
    reducers: {
        toggle: (state) => {
            state.loader = !state.loader
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = loaderSlice.actions

export default loaderSlice.reducer