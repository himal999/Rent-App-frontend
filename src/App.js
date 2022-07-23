import {Routes,Route} from "react-router-dom";

import Expo from "./pages/expo/Expo";
import Home from "./pages/home/Home";


function App() {
  return (
   <>
    <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/expo" element={<Expo/>} />
    </Routes>
  </>
  );
}

export default App;
