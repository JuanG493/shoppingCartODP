
import { Outlet } from "react-router-dom";
import FooterComp from "./FooterComp";
import NavBar from './NavBar';

import StateCompo from "./StateCompo";
function App() {

  return (
    <>
      <StateCompo>
        <header>
          <NavBar></NavBar>
        </header>
        <div>
          <Outlet> </Outlet>
        </div>
        <FooterComp></FooterComp>
      </StateCompo>
    </>
  )
}

export default App
