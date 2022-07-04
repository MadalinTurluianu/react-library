import { FC } from "react";

import BookType from "common/types/BookType";

import Book from "common/components/BookList/components/Book/Book";

const BookList: FC<{eventHandler?: Function, owner: string, books: BookType[]}> = (props) => {  
  return (
    <ul className="w-96 mt-5">
      {props.books.map((book) => (
        <Book
          book={book}
          eventHandler={props.eventHandler?.bind(null, book)}
          key={book.id || book.ISBN}
          content={props.owner === "user" ? "Return" : "Borrow"}
        />
      ))}
    </ul>
  );
};

export default BookList;
