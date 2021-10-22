import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="D:\study\learning\computer\React JS course\projects\whatsapp_clone\whatsapp-clone\src\whatsapp.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Google</h1>
        </div>
        <button onClick={signIn}>Sign In With Google</button>
      </div>
    </div>
  );
};

export default Login;
