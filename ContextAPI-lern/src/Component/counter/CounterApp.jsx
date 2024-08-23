import { useContext } from "react";
import Counter from "./Counter";
import { MyContext } from "../../context/Counter";

const CounterApp = () => {
  const contextCount = useContext(MyContext);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-4">
        Counter is {contextCount.count}
      </h1>
      <Counter />
    </div>
  );
};

export default CounterApp;
