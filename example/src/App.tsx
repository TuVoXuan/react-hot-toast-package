import { toast } from "react-hot-toast-vxt";
import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={() => toast.success(`toast success`, { duration: 5000 })}
      >
        add toast success
      </button>
      <button onClick={() => toast.warning(`toast warning`)}>
        add toast warning
      </button>
      <button onClick={() => toast.error(`toast error`)}>
        add toast error
      </button>
      <button onClick={() => toast.loading(`toast loading`)}>
        add toast loading
      </button>
    </>
  );
}

export default App;
