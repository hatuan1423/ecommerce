import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '~/redux/Slices/shopSlice'
import themeReducer from '~/redux/Slices/themeSlice'

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        theme: themeReducer
    },
})