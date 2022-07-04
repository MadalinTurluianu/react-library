import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import BookType from "common/types/BookType";
import LibraryType from "store/types/LibraryType";

const initialState: LibraryType = {
  books: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state: LibraryType, action: PayloadAction<BookType>) {
      const fundBook = state.books.find(
        (book) => book.ISBN === action.payload.ISBN
      );

      if (fundBook) {
        fundBook.number++;
        fundBook.cost = action.payload.cost;

        const bookTitles = fundBook.title.split(" | ");

        if (!bookTitles.includes(action.payload.title)) {
          fundBook.title += ` | ${action.payload.title}`;
        }
      } else {
        state.books.push(action.payload);
      }
    },

    returnBook(state: LibraryType, action: PayloadAction<BookType>) {
      const fundBook = state.books.find(
        (book) => book.ISBN === action.payload.ISBN
      );

      if (fundBook) {
        fundBook.number++;
      }
    },

    borrowBook(state: LibraryType, action: PayloadAction<string>) {
      const fundBook = state.books.find((book) => book.ISBN === action.payload);

      if (fundBook!.number > 0) {
        fundBook!.number--;
      }
    },

    addAllBooks(state: LibraryType, action: PayloadAction<BookType[]>) {
      state.books = action.payload;
    },
  },
});

export const libraryActions = librarySlice.actions;


export default librarySlice;
