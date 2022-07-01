import { FC, MouseEventHandler } from "react";

import classes from "./Book.module.css"

import BookType from "@library/types/BookType";

const Book: FC<{book: BookType}&{eventHandler?: MouseEventHandler, content: string}> = (props) => {

  const book = props.book
  
  return <li className={classes.li}>
    <p>{`Title: ${book.title}`}</p>
    <p>{`ISBN: ${book.ISBN}`}</p>
    <p>{`Price: ${book.cost}`}</p>
    <p>{`Amount: ${book.number}`}</p>
    <button onClick={props.eventHandler}>{props.content}</button>
  </li>
};

export default Book;
