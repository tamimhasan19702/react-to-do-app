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
    }
  },
});

export const { showBooks,addBooks } = bookSlice.actions;
export default bookSlice.reducer;
