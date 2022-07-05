import { FC, MouseEventHandler } from "react";

import BookType from "common/types/BookType";

import classes from "./Book.module.css"

const Book: FC<{eventHandler?: MouseEventHandler, content: string, book: BookType}> = (props) => {

  const book = props.book
  
  return <li className={`border-b flex justify-between items-center mt-5 py-1 border-red-600 ${classes.container}`}>
    <div>
    <p><span>Title: </span>{book.title}</p>
    <p><span>ISBN: </span>{book.ISBN}</p>
    </div>
    <div>
    <p><span>Price: </span>{`${book.cost} $`}</p>
    <p><span>Amount: </span>{book.number}</p>
    </div>
    <button className="index__classic-button" onClick={props.eventHandler}>{props.content}</button>
  </li>
};

export default Book;
