import react from "react";
import Login from "../login/Login";
import "./homepage.css";
// import signInWithGoogle from "../Firebase";
import { useContext } from "react";
import { myContext } from "../context/myContext";

const HomePage = () => {
  const { inputValue, setInputValue } = useContext(myContext);
  return (
    <div className="homePage">
      <h1>Welcome {inputValue}</h1>
      <div className="boxes-container">
        <div className="box-left"></div>
        <div className="box-right"></div>
      </div>

      <p style={{ fontSize: "14px", color: "  rgba(121, 201, 121, 0.419)" }}> &copy;Liat Pardo Grinbaum&copy;</p>
    </div>
  );
};
export default HomePage;
