import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import UserType from "@library/types/UserType";
import BookType from "@library/types/BookType";

const initialState: UserType = {
  books: [],
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBook(state: UserType, action: PayloadAction<BookType>) {
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

    returnBook(state: UserType, action: PayloadAction<string>) {
      const fundBook = state.books.find((book) => book.ISBN === action.payload);

      if (fundBook!.number > 0) {
        fundBook!.number--;
      }else {
        state.books = state.books.filter((book) => book.ISBN !== fundBook!.ISBN)
      }
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
