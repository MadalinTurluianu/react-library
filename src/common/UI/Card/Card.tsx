import { FC, PropsWithChildren } from "react";

import classes from "./Card.module.css"

const Card: FC<PropsWithChildren<{classes?: string}>> = (props) => {
  return <div className={`${classes.card} ${props.classes ? props.classes : ""}`}>{props.children}</div>;
};

export default Card;
