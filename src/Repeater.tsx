import { useRef } from "react";
import type { ReactNode } from "react";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

const Repeater = (props: IProps) => {
  const { visible, children } = props;
  const resolveRef = useRef <(...args: any) => any>(null);

  if (visible) {
    resolveRef.current?.();
    resolveRef.current = null;
  } else {
    throw new Promise((resolve) => {
      resolveRef.current = resolve
    })
  }

  return <>{children}</>;
};

export default Repeater;
