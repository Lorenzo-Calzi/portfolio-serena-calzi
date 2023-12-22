import {configureStore} from '@reduxjs/toolkit'
import loaderReducer from './loaderSlice'
import popupSlice from "./popupSlice";
import sideBarSlice from "./sideBarSlice";

export default configureStore({
    reducer: {
        loader: loaderReducer,
        popup: popupSlice,
        sideBar: sideBarSlice
    },
})