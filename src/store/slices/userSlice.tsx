import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import UserType from "@library/types/UserType";
import BookType from "@library/types/BookType";

const initialState: UserType = {
  books: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBook(state: UserType, action: PayloadAction<BookType>) {
      if (action.payload.number > 0) {
        state.books.push({
          ...action.payload,
          number: 1,
          borrowDate: new Date().getTime(),
          id: `${action.payload.ISBN}.${new Date().getTime()}`,
        });
      }
    },

    removeBook(state: UserType, action: PayloadAction<BookType>) {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },

    addAllBooks(state: UserType, action: PayloadAction<BookType[]>) {
      state.books = action.payload;
    } 
  },
});

export const userActions = userSlice.actions;

export default userSlice;
