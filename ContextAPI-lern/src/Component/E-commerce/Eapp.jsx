import Item from "./Item";
import Cart from "./Cart";

const Eapp = () => {
  return (
    <div className="text-center ">
      <div className="flex gap-5 mb-5">
        <Item name="MackBook Pro" price={100000} />
        <Item name="Pendrive" price={1050} />
        <Item name="Kebord" price={3500} />
        <Item name="mouse" price={3500} />
      </div>

      <Cart />
    </div>
  );
};

export default Eapp;
