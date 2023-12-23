import ToogleMenu from "./ToogleMenu";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-3 p-3 w-7/12 mx-auto bg-gray-100  border-blue-100 border-b-2 cursor-pointer">
      <ToogleMenu data={cartItems} />
    </div>
  );
};
export default Cart;
