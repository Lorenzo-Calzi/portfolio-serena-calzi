import {configureStore} from '@reduxjs/toolkit'
import loaderReducer from './loaderSlice'
import popupSlice from "./popupSlice";

export default configureStore({
    reducer: {
        loader: loaderReducer,
        popup: popupSlice
    },
})