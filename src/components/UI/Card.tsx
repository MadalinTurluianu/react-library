import { FC, PropsWithChildren } from "react";

import classes from "./Card.module.css"

const Card: FC<PropsWithChildren> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
