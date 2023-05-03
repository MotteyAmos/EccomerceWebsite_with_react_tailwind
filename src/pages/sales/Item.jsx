import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";

const Item = ({popularsales,
  values: { id, title, text, rating, btn, img, price, color, shadow },
}) => {

  const dispatch = useDispatch(addItem);

  const onAddItem = ()=>{
    dispatch(addItem({ id, title, text, rating, btn, img, price, color, shadow, quantity }))
  }

  return (
    <div
      className={`bg-gradient-to-t ${color} ${shadow} w-full h-[18rem] 
    relative grid items-center justify-center text-center p-3 rounded-lg 
    transition-theme hover:scale-105 filter backdrop-blur-md 
    ${popularsales && "h-[11rem] grid-cols-2 py-2 grid items-center"}  `
}
    >
      <div className={`grid gap-2 text-slate-200 ${popularsales && "text-start"}`}>
        <div className="">
          <h2 className="font-semibold text-2xl ">{title}</h2>
          <p className=" text-md">{text}</p>
        </div>
        <div className={!popularsales? `flex justify-center gap-3 `: " flex justify-start gap-3"}>
          <span className="bg-slate-200 text-slate-600 rounded-md px-1">${price}</span>
          <StarIcon className="w-5 text-gray-800" />
          <span className="text-slate-200">{rating}</span>
        </div>
        <div>
          <div className={!popularsales? `flex justify-center gap-3 `: " flex justify-start gap-3"}>
            <div className="bg-slate-100 w-[2rem] grid p-1 rounded-sm ">
              <ShoppingBagIcon className=" text-slate-700  w-[1.5rem]" />
            </div>
            <button
              className="bg-slate-100  text-slate-700 p-1 rounded text-sm 
            active:scale-90 transition-all ease-in-out duration-75"
            onClick={()=>onAddItem()}
            >
              {btn}
            </button>
          </div>
        </div>
      </div>
      <div className={`w-[15rem] relative `}>
        <img
          src={img}
          alt=""
          className={!popularsales? `cursor-pointer hover:-rotate-[15deg] hover:scale-105 transition-theme `: 
          "absolute  top-[-3rem] right-7 cursor-pointer -rotate-[30deg] hover:rotate-[5deg] hover:scale-105 transition-theme "}
        />
      </div>
    </div>
  );
};

export default Item;
