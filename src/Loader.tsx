import { useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

const Loader: FC<IProps> = (props) => {
  const { visible, children } = props;
  const promiseRef = useRef<Promise<void>>(null);
  const resolveRef = useRef<() => void>(null);

  const resolvePromise = () => {
    if (visible) {
      resolveRef.current?.();
      resolveRef.current = null;
      promiseRef.current = null;
    }
  };

  useEffect(() => () => resolvePromise(), []);

  if (!visible) {
    if (resolveRef.current === null) {
      promiseRef.current = new Promise<void>(
        (resolve) => (resolveRef.current = resolve),
      );
    }

    const promise = promiseRef.current;
    throw promise;
  }

  resolvePromise();

  return <>{ children }</>;
};

export default Loader;
