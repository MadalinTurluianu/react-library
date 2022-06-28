import { FC, PropsWithChildren } from "react";

const Main: FC<PropsWithChildren> = (props) => {
  return <main>{props.children}</main>;
};

export default Main;
