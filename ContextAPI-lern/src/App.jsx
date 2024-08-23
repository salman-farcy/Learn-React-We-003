import CounterApp from "./Component/counter/CounterApp";
import { MyProvider } from "./context/Counter";

function App() {
  return (
    <div>
      <MyProvider>
        <CounterApp />
      </MyProvider>
    </div>
  );
}

export default App;
