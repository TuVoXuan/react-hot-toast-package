import { useToast } from "react-hot-toast";
import { EnumToastType } from "react-hot-toast/dist/types/react-hot-toast.enum";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const { toasts, addToast, dismissToast } = useToast();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            addToast({
              context: `hello world + ${Math.random() * 100}`,
              type: EnumToastType.SUCCESS,
              duration: 5000,
            })
          }
        >
          addToast
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
