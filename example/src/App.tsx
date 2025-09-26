import { useToast } from "react-hot-toast";
import { EnumToastType } from "react-hot-toast/dist/types/react-hot-toast.enum";
import "./App.css";

function App() {
  const { addToast } = useToast();

  return (
    <>
      <button
        onClick={() =>
          addToast({
            context: `toast success`,
            type: EnumToastType.SUCCESS,
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
            type: EnumToastType.WARNING,
          })
        }
      >
        add toast warning
      </button>
      <button
        onClick={() =>
          addToast({
            context: `toast error`,
            type: EnumToastType.ERROR,
          })
        }
      >
        add toast error
      </button>
      <button
        onClick={() =>
          addToast({
            context: `toast loading`,
            type: EnumToastType.LOADING,
          })
        }
      >
        add toast loading
      </button>
    </>
  );
}

export default App;
