import { ReactNode, Suspense } from "react";
import Loader from "./Loader";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

const KeepAlive = (props: IProps) => {
  const { visible, children } = props;
  return (
    <Suspense fallback={null}>
      <Loader visible={visible}>{children}</Loader>
    </Suspense>
  );
}

export default KeepAlive;