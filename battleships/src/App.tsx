import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  import Game from "./pages/BattleGame";
  import ShipPlacingBoard from "./pages/ShipPlacingBoard";
  import Menu from "./pages/Menu";

  function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Menu />}/>
                <Route path="/singlePlayer" element={<ShipPlacingBoard />}/>
            </Routes>
        </Router>

    );
  }

  export default App
  