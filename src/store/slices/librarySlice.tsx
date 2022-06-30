import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import BookType from "@library/types/BookType";
import LibraryType from "@library/types/LibraryType";

const initialState: LibraryType = {
  books: [
    { title: "book1", ISBN: "1", cost: 1, number: 3 },
    { title: "book2", ISBN: "2", cost: 2, number: 1 },
    { title: "book3", ISBN: "3", cost: 3, number: 7 },
  ],
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
  },
});

export const libraryActions = librarySlice.actions;

export default librarySlice;
