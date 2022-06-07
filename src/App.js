import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
// import Map from "./components/Map/Map";

import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./components/Forum/Forum";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import About from "./components/About/About";
import MapGoogle from "./components/Map/Map";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />

        <div className="main-container">
          <Route path="/" exact component={HomePage} />
          <Route path="/forum" component={Forum} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
          <Route path="/about" exact component={About} />
          <Route path="/map" exact component={MapGoogle} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
