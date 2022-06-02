import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./loginGmail.css";

function Login() {
  const [user, setUser] = useState({});
  const [localUser, setLocalUser] = useState({});
  // let isExist = localStorage.getItem("user");

  // if (isExist) {
  //   let userObj = JSON.parse(localStorage.getItem("user"));
  // }
  let isLogged = localStorage.getItem("user");
  console.log(localUser);
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    localStorage.setItem("user", JSON.stringify(userObject));
    console.log(localStorage);
    console.log(JSON.stringify(userObject));
    // setLocalUser(JSON.parse(localStorage.getItem("user")));
  }

  function handleSignOut(event) {
    console.log("well..");
    setUser({});
    setLocalUser({});
    localStorage.clear();
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */

    if (!isLogged) {
      google.accounts.id.initialize({
        client_id: "491218794514-a02tfou4b43u8mfokr659ditr8n074je.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large" });
      google.accounts.id.prompt();
    } else {
      isLogged = JSON.parse(localStorage.getItem("user"));
      setLocalUser(isLogged);
    }
  }, []);

  return (
    <div className="logGamil">
      <div id="signInDiv"></div>
      {Object.keys(localUser).length != 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}
      {user && (
        <div>
          <img src={user.picture} alt=""></img>
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default Login;
