
const CartFooter = () => {
  return (
    <div className=" absolute bottom-0 w-full pr-10">
        <div className="flex justify-between">
            <span>SUBTOTAL</span>
            <span>$0</span>
        </div>
        <div className="text-center text-slate-800">
            Taxes and Shipping Will Calculate At Shipping
        </div>
        <div className="bg-slate-900 py-2">
            <button className="w-full text-slate-100  active:scale-95 transition-all ease-in-out  ">
              Check Out
            </button>
        </div>
    </div>
  )
}

export default CartFooter