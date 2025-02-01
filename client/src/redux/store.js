import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '~/redux/Slices/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
})