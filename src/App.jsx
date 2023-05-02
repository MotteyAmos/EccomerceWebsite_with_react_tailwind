import HeroHomePage from "./pages/HeroHomePage";
import { heroApi } from "./data/data";
import Sales from "./components/sales/Sales";
import { popularsales, toprateslaes } from "./data/data";
import Features from "./components/Features";
import { highlight } from "./data/data";
import { sneaker } from "./data/data";


const App = () => {
  return (
    <>
      <div className="grid gap-[7rem]  ">
        <HeroHomePage heroApi={heroApi} />
        <Sales value={popularsales} popularsales={true} />
        <Features  value={highlight} ishighlight/>

        <Sales value={toprateslaes} />
        <Features  value={sneaker}/>
      </div>
    </>
  );
};

export default App;
