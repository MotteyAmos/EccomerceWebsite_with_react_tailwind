import CartBag from "./CartBag";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import { selectCartState } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { selectSelectedItems } from "../../features/cartSlice";
import SelectedItems from "./SelectedItems";

const Cart = () => {
  const cartState = useSelector(selectCartState);
  const ifItemsSelected = useSelector(selectSelectedItems)
  return (
    <div
      className={ cartState ?`fixed top-0 right-0 left-0 z-[500] opacity-100 filter backdrop-blur-lg bg-white/10 cart-transition-theme 
      h-screen w-screen `: "z-[0] fixed opacity-0  w-[0px] h-0 cart-transition-theme  " }
    >
      <div className={cartState ?"right-0 fixed w-[40%] h-screen filter backdrop-blur-lg bg-white/90 drop-shadow-2xl  cart-transition-theme opacity-100":"opacity-0 right-0 fixed w-[0px] z-[0] h-[0px] cart-transition-theme" }>
        <CartHeader />
        {
          (ifItemsSelected.length <=0) ? (<CartBag />): (<SelectedItems/>)
        }
        
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
