import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const SelectedItem = ({
  values: { id, title, text, rating, btn, img, price, color, shadow, quantity },
}) => {
  return (
    <div className="flex justify-between items-center my-5 pl-2">
      <div className="flex gap-5  items-center justify-center">
        <div
          className={`bg-gradient-to-t ${color} ${shadow} cursor-pointer relative rounded-md hover:scale-110 transition-theme`}
        >
          <img src={img} alt={`img/${title}`} className="w-[10rem] " />
          <span className="absolute top-2 right-5 bg-slate-200 p-[2px] grid items-center justify-center  text-sm rounded">
            ${price}
          </span>
        </div>

        <div className="">
          <p className="font-semibold text-lg text-slate-800">{title}</p>
          <p className="text-sm">{text}</p>
          <div className="flex justify-between pl-5 items-center">
            <button className="bg-slate-500 rounded-sm cursor-pointer transition-all ease-in-out duration-400 active:scale-90
            shadow-md shadow-slate-700">
              <MinusIcon className="w-5 text-slate-100 " />
            </button>
            <button>{quantity}</button>
            <button className="bg-slate-500 rounded-sm cursor-pointer transition-all ease-in-out duration-400 active:scale-90
            shadow-md shadow-slate-700">
              <PlusIcon className="w-5 text-slate-100 " />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-[5rem]">
        <div>${price}</div>
        <TrashIcon className="w-7" />
      </div>
    </div>
  );
};

export default SelectedItem;
