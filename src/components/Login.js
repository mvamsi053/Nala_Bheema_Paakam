import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import "../styles/Login.css";
import jwt_decode from "jwt-decode";
var lUser = {};
var loginUser = window.localStorage.getItem("isLoggedIn");
function Login({ user, setUser }) {
  function handleCallbackResponse(respose) {
    let userObject = jwt_decode(respose.credential);
    window.localStorage.setItem("Luser", JSON.stringify(userObject));
    lUser = JSON.parse(window.localStorage.getItem("Luser"));
    setUser(lUser);
    console.log("lUser:", lUser);
    window.localStorage.setItem("isLoggedIn", true);
    document.getElementById("SignInDiv").hidden = true;
  }

  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id:
        "17925617582-ge35q2hbkmbauk9o9qcqb12cjpd4c4vt.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      size: "large",
    });
  }, []);
  return (
    <div id="login">
      <h4>Please Login to Add recipe </h4>
      <div id="SignInDiv"></div>
      {/* {console.log("user.email_verified", lUser.email_verified)}; */}
      {window.localStorage.getItem("isLoggedIn") && (
        <Navigate to="/main/user" />
      )}
    </div>
  );
}

export default Login;
