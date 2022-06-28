import { FC } from "react";

import BookType from "../../types/BookType";

const Book: FC<BookType> = (props) => {
  
  return <li>
    <p>{props.title}</p>
    <p>{props.ISBN}</p>
    <p>{props.cost}</p>
  </li>
};

export default Book;
