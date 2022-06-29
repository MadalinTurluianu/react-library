import { FC } from "react";

import classes from "./BookList.module.css"

import BookType from "@library/types/BookType";

import Book from "./Book";

const BookList: FC<{books: BookType[]}&{eventHandler?: Function}> = (props) => {
  return (
    <ul className={classes.ul}>
      {props.books.map((book) => (
        <Book
          book={book}
          eventHandler={props.eventHandler?.bind(null, book)}
          key={book.ISBN}
        />
      ))}
    </ul>
  );
};

export default BookList;
