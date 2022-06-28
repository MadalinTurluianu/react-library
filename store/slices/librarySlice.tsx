import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import LibraryType from "../../types/LibraryType";
import BookType from "../../types/BookType";

const initialState: LibraryType = {
  books: [
    { title: "book1", ISBN: "1", cost: 1, number: 1 },
    { title: "book2", ISBN: "2", cost: 2, number: 1 },
    { title: "book3", ISBN: "3", cost: 3, number: 1 },
  ],
};

const librarySlice = createSlice({
  name: "library",
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

    borrowBook(state, action: PayloadAction<string>) {
      const fundBook = state.books.find((book) => book.ISBN === action.payload);

      if (fundBook!.number > 0) {
        fundBook!.number--;
      }
    },
  },
});

export const libraryActions = librarySlice.actions;

export default librarySlice;
