import { useCart } from "../../context/Cart";

const Cart = () => {
  const cart = useCart();
  console.log("Cart", cart)
  return (
    <div className="bg-green-100 p-4 rounded-lg">
      {
        cart && cart.items.map((item, i) => <li key={i}>{item.name} - ${item.price}</li>)
      }
      <p>Total Bill: ${cart.items.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default Cart;
