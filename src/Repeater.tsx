import { useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

const Repeater = (props: IProps) => {
  const { visible, children } = props;

  if (!visible) {
    throw Promise.reject();
  }

  return <>{children}</>;
};

export default Repeater;
