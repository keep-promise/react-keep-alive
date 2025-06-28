import { createContext, ReactNode, Suspense, useState } from "react";
import Repeater from "./Repeater";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

interface IKeepAliveContext {
  active?: boolean;
  unmount?: () => void;
}

const KeepAliveContext = createContext<IKeepAliveContext>({});

const KeepAlive = (props: IProps) => {
  const { visible, children } = props;
  const [mounted, setMounted] = useState(true)

  const unmount = () => {
    setMounted(false);
    setTimeout(() => {
      setMounted(true);
    });
  }

  if (!mounted) return null;

  return (
    <KeepAliveContext.Provider value={{ active: visible, unmount }}>
      <Suspense fallback={null}>
        <Repeater visible={visible}>{children}</Repeater>
      </Suspense>
    </KeepAliveContext.Provider>
  );
}

export default KeepAlive;