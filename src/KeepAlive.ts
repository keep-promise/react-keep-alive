import React, { useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

export const KeepAlive: FC<IProps> = (props) => {
  const { visible, children } = props;
  const promiseRef = useRef<Promise<void> | null>(null);
  const resolveRef = useRef<(() => void) | null>(null);

  const resolvePromise = () => {
    if (visible) {
      resolveRef.current();
      resolveRef.current = null;
      promiseRef.current = null;
    }
  };
  // effect
  useEffect(() => () => resolvePromise(true), []);

  if (mode === "hidden") {
    if (resolveRef.current === null) {
      promiseRef.current = new Promise<void>(
        (resolve) => (resolveRef.current = resolve),
      );
    }

    const promise = promiseRef.current!;
    if ("use" in React && typeof React.use === "function") {
      (React.use as <T>(primise: Promise<T>) => T)(promise);
    } else {
      throw promise;
    }
  }

  resolvePromise();

  return children;
};