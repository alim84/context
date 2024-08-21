import  { useContext } from "react";
import UserContext from "./context/UserContext";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";

const App = () => {
 
  return <div>
    <FirstPage/>
    <SecondPage/>

  </div>;
};

export default App;
