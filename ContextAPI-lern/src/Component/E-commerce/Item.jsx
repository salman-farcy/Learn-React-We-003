
import { useCart } from "../../context/Cart";

const Item = ({name, price}) => {
  const cart = useCart();
  let { items, setItems } = cart;
  return (
    <div className="mt-10 bg-slate-100 p-4 rounded-lg">
      <h4>{name}</h4>
      <p>${price}</p>
      <button
        onClick={() =>
          setItems([...items, { name, price }])
        }
        className="bg-purple-200 py-2 px-5 rounded-md cursor-pointer"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
