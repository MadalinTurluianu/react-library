import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = (props) => {
  return <div className="flex flex-col items-center">{props.children}</div>;
};

export default Card;
