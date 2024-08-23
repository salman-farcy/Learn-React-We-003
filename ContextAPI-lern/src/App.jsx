import { useContext } from "react";
import Counter from "./Component/Counter";
import { MyContext } from "./context/Counter";



function App() {
  const counterState = useContext(MyContext);
  
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-4">Counter is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App;
