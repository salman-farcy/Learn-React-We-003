import { useContext } from "react";
import { MyContext } from "../../context/Counter";

const Counter = () => {
  const counterUpdater = useContext(MyContext);
  let { count, setCount } = counterUpdater;
  return (
    <div className="mx-auto w-10/12 ">
      <div className="text-center mt-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-red-200 py-2 px-4 rounded-md cursor-pointer mr-4"
        >
          Incremenent
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-200 py-2 px-4 rounded-md cursor-pointer"
        >
          Decremenent
        </button>
      </div>
    </div>
  );
};

export default Counter;
