/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Tareq Monower" },
    { id: 2, title: "Love Bangladesh", author: "Tareq Monower" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state,action) => {
        state.books.push(action.payload)
    },
    deleteBook: (state,action) => {
        const id = action.payload;
        state.books = state.books.filter(book => book.id !== id)
    }
  },
});

export const { showBooks,addBooks,deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
