import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import KeepAlive from '../src'

const App = () => {
  const [state, setstate] = useState(1)

  return (
    <div>
      <h1>测试keepalive</h1>
      <KeepAlive visible={state === 1}>
        <div>
          <span>组件1</span>
          <input />
        </div>
      </KeepAlive>
      <KeepAlive visible={state === 2}>
        <div>
          <span>组件2</span>
          <input />
        </div>
      </KeepAlive>
      <button onClick={() => setstate(1)}>展示组件1</button>
      <button onClick={() => setstate(2)}>展示组件2</button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
