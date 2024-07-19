import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import popupSlice from "./popupSlice";
import sideBarSlice from "./sideBarSlice";
import dbCallSlice from "./dbCallSlice";

export default configureStore({
    reducer: {
        loader: loaderReducer,
        popup: popupSlice,
        sideBar: sideBarSlice,
        dbCall: dbCallSlice
    }
});
