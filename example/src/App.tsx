import { useToast } from "react-hot-toast";
import "./App.css";

function App() {
  const { addToast } = useToast();

  return (
    <>
      <button
        onClick={() =>
          addToast({
            context: `toast success`,
            type: "success",
            duration: 5000,
          })
        }
      >
        add toast success
      </button>
      <button
        onClick={() =>
          addToast({
            context: `toast warning`,
            type: "warning",
          })
        }
      >
        add toast warning
      </button>
      <button
        onClick={() =>
          addToast({
            context: `toast error`,
            type: "error",
          })
        }
      >
        add toast error
      </button>
      <button
        onClick={() =>
          addToast({
            context: `toast loading`,
            type: "loading",
          })
        }
      >
        add toast loading
      </button>
    </>
  );
}

export default App;
