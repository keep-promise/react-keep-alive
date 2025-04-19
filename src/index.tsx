import { ReactNode, Suspense } from "react";
import Repeater from "./Repeater";

interface IProps {
  visible: boolean;
  children: ReactNode;
}

const KeepAlive = (props: IProps) => {
  const { visible, children } = props;
  return (
    <Suspense fallback={null}>
      <Repeater visible={visible}>{children}</Repeater>
    </Suspense>
  );
}

export default KeepAlive;