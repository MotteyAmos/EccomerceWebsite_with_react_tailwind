import HeroHomePage from "./pages/HeroHomePage";
import { heroApi } from "./data/data";
import Sales from "./pages/sales/Sales";
import { popularsales, toprateslaes } from "./data/data";
import Features from "./pages/Features";
import { highlight } from "./data/data";
import { sneaker } from "./data/data";
import Stories from "./pages/stories/Stories";
import { story } from "./data/data";
import Footer from "./pages/footer/Footer";
import { footerAPI } from "./data/data";
import Navigation from "./pages/Navigation";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <>
        <div className="relative w-screen">
          <Toaster position="top-center" reverseOrder={false}/>
          <Cart />
          <Navigation />
          <div className={`grid gap-y-[7rem] overflow-y-hidden`}>
            <HeroHomePage heroApi={heroApi} />
            <Sales value={popularsales} popularsales={true} />
            <Features value={highlight} ishighlight />

            <Sales value={toprateslaes} />
            <Features value={sneaker} />
            <Stories story={story} />
            <Footer value={footerAPI} />
          </div>
        </div>
    </>
  );
};

export default App;
