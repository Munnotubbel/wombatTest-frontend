import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

import NavBar from "./components/NavBar";
import DataContextProvider from "./context/DataContext";
import Wallet from "./routes/Wallet";
import Settings from "./routes/Settings";
import Explorer from "./routes/Explorer";
import Home from "./routes/Home";
import Header from "./components/Header";

function App() {

  const screenModeMargin = window.matchMedia("(orientation: portrait)").matches
    ? "0%"
    : "4%";

  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

  window.addEventListener("orientationchange", function() {
    var afterOrientationChange = function() {
      setBrowserHeight(window.innerHeight);
      window.removeEventListener("resize", afterOrientationChange);
    };
    window.addEventListener("resize", afterOrientationChange);
  });

  return (
    <Router>
      <DataContextProvider>
        <div style={{ height: "100%" }}>
          <div
            className="outerContainer"
            style={{ height: browserHeight, marginTop: screenModeMargin }}
          >
            <div className="innerContainer">
              <div className="header">
                <Header />
              </div>

              <div className="info">
                <Switch>
                  <Route path="/settings">
                    <Settings />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/explorer">
                    <Explorer />
                  </Route>
                  <Route exact path="/wallet">
                    <Wallet />
                  </Route>
                </Switch>
              </div>

              <div className="footer">
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </DataContextProvider>
    </Router>
  );
}

export default App;
