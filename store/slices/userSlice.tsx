import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import UserType from "../../types/UserType";
import BookType from "../../types/BookType";

import { libraryActions } from "./librarySlice";

const initialState: UserType = {
  books: [],
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<BookType>) {
      const fundBook = state.books.find(
        (book) => book.ISBN === action.payload.ISBN
      );

      if (fundBook) {
        fundBook.number++;
        fundBook.title += ` | ${action.payload.title}`;
      } else {
        state.books.push(action.payload);
      }
    },

    returnBook(state, action: PayloadAction<string>) {
      const fundBook = state.books.find((book) => book.ISBN === action.payload);

      if (fundBook!.number > 0) {
        fundBook!.number--;

        
      }
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
