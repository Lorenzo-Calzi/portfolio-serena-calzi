import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        popupVisibility: true,
        popupMessage: 'Messaggio di test'
    },
    reducers: {
        togglePopup: (state, action: PayloadAction<string>) => {
            state.popupVisibility = !state.popupVisibility
            state.popupMessage = action.payload
        }
    },
})

export const { togglePopup } = popupSlice.actions

export default popupSlice.reducer