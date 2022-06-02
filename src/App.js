import react from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Map from "./components/Map/Map";
import Login from "./components/login/Login";
import HomePage from "./components/HomePage/HomePage";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {/* <Map /> */}

        <Route path="/" exact component={HomePage} />
        {/*  <Route path="/forum" exact component={Forum} />
        <Route path="/map" exact component={Map} />
        <Route path="/about" exact component={About} />  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
