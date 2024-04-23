import "./LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage({ setLoggedIn, setIsAdmin }) {
  const [username, setUsername] = useState("");
  const [PassWord, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const OnhandleLogin = () => {
    // Perform authentication here and set user type (admin or regular user)
    if (username === "admin" && PassWord === "1234") {
      setLoggedIn(true);
      setIsAdmin(true);
      navigate("/admin-dashboard");
    } else if (username === "user" && PassWord === "6321") {
      setLoggedIn(true);
      setIsAdmin(false);
      navigate("/user-card");
    } else {
      alert("Invalid username or password");
    }
  };
  const OnEmailChange = (event) => {
    setUsername(event.target.value);
  };
  const OnpwdChange = (event) => {
    setPassword(event.target.value);
  };

  const onChangeReg = (e) => {
    setShow((prev) => !prev);
  };

  return (
    <div classNameName="coverdiv">
      <div className="fmdiv">
        <h2 className="heading1">Explora</h2>

        <h5>Login to your account...</h5>

        <form className="frm">
          <label for="">UserName</label>
          <input type="text" onChange={OnEmailChange} />
          <label for="">password</label>
          <input type="password" value={PassWord} onChange={OnpwdChange} />
          {show ? (
            <button className="btn1" onClick={OnhandleLogin}>
              Login
            </button>
          ) : (
            <button className="btn1">signup</button>
          )}

          <br />
          {show ? (
            <span for="">
              Don't have an account....
              <br /> <p onClick={onChangeReg}>Register now..!</p>
            </span>
          ) : (
            <span for="">
              Already have an account....
              <br /> <p onClick={onChangeReg}>Login now..!</p>
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
