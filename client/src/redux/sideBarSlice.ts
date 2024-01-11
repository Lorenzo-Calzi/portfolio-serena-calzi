import {createSlice} from '@reduxjs/toolkit'

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: {
        sideBarVisibility: false,
    },
    reducers: {
        toggleSideBar: (state) => {
            state.sideBarVisibility = !state.sideBarVisibility
        }
    },
})

export const {toggleSideBar} = sideBarSlice.actions

export default sideBarSlice.reducer