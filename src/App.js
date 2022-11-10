import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AssHome from "./component/AssHome";
import RegisterNewGood from "./pages/RegisterNewGood";
import RegisterNewHandler from "./pages/RegisterNewHandler";
import RegisterTranshipment from "./pages/RegisterTranshipment";
import './index.css'

const App= () => {

  return (
    <>
 <Router>
        <Routes>
          <Route path="/"  element={<RegisterTranshipment />} />
          <Route path="new-good" element={<RegisterNewGood />} />
          <Route path="new-handler" element={<RegisterNewGood />} />
        </Routes>
      </Router>

   
    </>
  );
}

export default App;
