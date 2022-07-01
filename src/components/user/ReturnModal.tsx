import { FC, MouseEventHandler } from "react";

import BookType from "@library/types/BookType";

import Card from "components/UI/Card";

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
    <Card>
      <p>{content}</p>
      <button onClick={props.onPay}>Pay</button>
      <button onClick={props.closeModalHandler}>Cancel</button>
    </Card>
  );
};

export default ReturnModal;
