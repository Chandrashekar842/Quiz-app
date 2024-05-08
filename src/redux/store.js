import { configureStore } from '@reduxjs/toolkit'
import selectionReducer from './reducer'

export const store = configureStore({
    reducer: {
        selectionChoices: selectionReducer
    }
})