import {configureStore} from '@reduxjs/toolkit'
import BookSlice from '../pages/BookSlice'

const store = configureStore({
    reducer: {
       Books: BookSlice
    }
})

export default store