import './App.css';
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {

  return (
    <div className="App">
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </div>
  );
};

export default App;