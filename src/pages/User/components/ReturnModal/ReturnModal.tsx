import { FC, MouseEventHandler } from "react";

import BookType from "common/types/BookType";

import Card from "common/UI/Card/Card";

import classes from "./ReturnModal.module.css";

const ReturnModal: FC<{
  book: BookType;
  closeModalHandler: MouseEventHandler;
  onPay: MouseEventHandler;
}> = (props) => {
  const nowTime = new Date().getTime();
  const borrowedPeriod = Math.floor(
    (nowTime - props.book.borrowDate!) / 1000 / 60 / 60 / 24
  );
  const daysLate = borrowedPeriod - 24 > 0 ? borrowedPeriod - 24 : 0;
  const content = `To return the book you have to pay ${
    props.book.cost + (props.book.cost * daysLate) / 100
  }$`;

  return (
    <Card classes={classes.container}>
      <p>{content}</p>
      <div>
        <button
          className="index__reverse-button"
          onClick={props.closeModalHandler}
        >
          Cancel
        </button>
        <button className="index__classic-button" onClick={props.onPay}>
          Pay
        </button>
      </div>
    </Card>
  );
};

export default ReturnModal;
