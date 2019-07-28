import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shops from "./Shops";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> E-Makers App </h1>
        <nav>
          <ul>
            <li>
              <Link to="/shops">View Shops</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/shops" component={Shops} />
      </div>
    </Router>
  );
}

export default App;
