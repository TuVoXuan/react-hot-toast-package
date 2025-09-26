// import { useToast } from "react-hot-toast";
import { toast } from "react-hot-toast";
import "./App.css";

function App() {
  // const { addToast } = useToast();

  return (
    <>
      <button onClick={() => toast.success(`toast success`)}>
        add toast success
      </button>
      <button onClick={() => toast.success(`toast warning`)}>
        add toast warning
      </button>
      <button onClick={() => toast.success(`toast error`)}>
        add toast error
      </button>
      <button onClick={() => toast.success(`toast loading`)}>
        add toast loading
      </button>
    </>
  );
}

export default App;
