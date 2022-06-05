import { useEffect, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

import { myContext } from "../context/myContext";
import "./loginGmail.css";

function Login() {
  const { setisLogged } = useContext(myContext);
  const [user, setUser] = useState({});
  // const [localUser, setLocalUser] = useState({});

  function handleCallbackResponse(response) {
    setisLogged((prev) => !prev);
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);

    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    localStorage.setItem("user", JSON.stringify(userObject));
  }

  function handleSignOut(event) {
    setisLogged((prev) => !prev);

    setUser({});

    localStorage.clear();
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id: "491218794514-a02tfou4b43u8mfokr659ditr8n074je.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large" });
    google.accounts.id.prompt();
  }, []);

  return (
    <div className="logGamil">
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}
      {user.name && (
        <div>
          <h3> {`welcome, ${user.name}`}</h3>
        </div>
      )}
    </div>
  );
}

export default Login;
