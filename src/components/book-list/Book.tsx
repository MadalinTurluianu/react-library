import { FC, MouseEventHandler } from "react";

import classes from "./Book.module.css"

import BookType from "@library/types/BookType";

const Book: FC<{book: BookType}&{eventHandler?: MouseEventHandler, content: string}> = (props) => {

  const book = props.book
  
  return <li className={classes.li}>
    <p>{book.title}</p>
    <p>{book.ISBN}</p>
    <p>{book.cost}</p>
    <p>{book.number}</p>
    <button onClick={props.eventHandler}>{props.content}</button>
  </li>
};

export default Book;
