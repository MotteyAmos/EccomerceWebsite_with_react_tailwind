import HeroHomePage from "./pages/HeroHomePage";
import { heroApi } from "./data/data";
const App = () => {
  return (
    <>
        <HeroHomePage heroApi={heroApi}/>
    </>
  )
}

export default App