import react from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Map from "./components/Map/Map";

import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./components/Forum/Forum";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";

import { useContext } from "react";
import { myContext } from "./components/context/myContext";
// import { createContext } from "react/cjs/react.production.min";

function App() {
  const { inputValue, setInputValue } = useContext(myContext);
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />

        {/* <Map /> */}
        <div className="main-container">
          <Route path="/" exact component={HomePage} />
          <Route path="/forum" component={Forum} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
          {/*<Route path="/map" exact component={Map} />
        <Route path="/about" exact component={About} />  */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
