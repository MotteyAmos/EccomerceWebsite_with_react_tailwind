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
import { store } from "./App/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="relative">
          <Cart />
          <Navigation />
          <div className="grid gap-[7rem]  ">
            <HeroHomePage heroApi={heroApi} />
            <Sales value={popularsales} popularsales={true} />
            <Features value={highlight} ishighlight />

            <Sales value={toprateslaes} />
            <Features value={sneaker} />
            <Stories story={story} />
            <Footer value={footerAPI} />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default App;
