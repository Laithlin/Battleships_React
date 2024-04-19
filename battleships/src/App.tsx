import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  import Game from "./pages/BattleGame";
  import Menu from "./components/Menu";

  function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Menu />}/>
                <Route path="/singlePlayer" element={<Game />}/>
            </Routes>
        </Router>

    );
  }

  export default App
  