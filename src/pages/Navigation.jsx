import logo from "../assets/images/logo.png";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { openCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();

  const [navbg, setNavbg] = useState(false);

  const checkScrollHight = () => {
    if (scrollY > 40) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return checkScrollHight();
    });
    return () => {
      checkScrollHight();
    };
  }, []);

  return (
    <header
      className={
        !navbg
          ? "relative w-full h-auto"
          : " opacity-95 filter backdrop-blur-md bg-white/30 border-b-2 fixed w-full h-[5rem] z-[120] top-0 right-0 left-0"
      }
    >
      <nav className="flex container absolute z-[100] justify-between top-5 px-[3rem]] m-auto left-0 right-0">
        <div>
          <img
            src={logo}
            alt={`img/logo`}
            className={`w-[4rem] ${navbg && "filter brightness-0"}`}
          />
        </div>

        <ul className="flex gap-3 ">
          <li>
            <MagnifyingGlassIcon
              className={`w-6  text-slate-200 hover:scale-125 transition-theme cursor-pointer ${
                navbg && "text-slate-900"
              }`}
            />
          </li>
          <li>
            <HeartIcon
              className={`w-6  text-slate-200 hover:scale-125 transition-theme cursor-pointer ${
                navbg && "text-slate-900"
              }`}
            />
          </li>
          <li>
            <button type="button" onClick={()=>{dispatch(openCart()), console.log("open cart")}}>
              <ShoppingBagIcon
                className={`w-6  text-slate-200 hover:scale-125 transition-theme cursor-pointer ${
                  navbg && "text-slate-900"
                }`}
              />
            </button>
            <span className="text-slate-800 bg-slate-100 w-4 h-5 text-sm grid items-center justify-center rounded-[50%] absolute -bottom-3">
              0
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
