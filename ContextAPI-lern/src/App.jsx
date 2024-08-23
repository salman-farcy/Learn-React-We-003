import CounterApp from "./Component/counter/CounterApp";
import Eapp from "./Component/E-commerce/Eapp";
import { CartProvider } from "./context/Cart";
import { MyProvider } from "./context/Counter";

function App() {
  return (
    <div>
      {/* counter component create Context API */}
      <MyProvider>
        <CounterApp />
      </MyProvider>

      {/* card */}
      <CartProvider>
        <Eapp />
      </CartProvider>
    </div>
  );
}

export default App;
