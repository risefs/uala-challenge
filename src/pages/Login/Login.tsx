import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { LoginContainer } from "./loginCss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = (e: any) => {
    if (e.name === "email") setEmail(e.value);
    if (e.name === "password") setPassword(e.value);
  };

  return (
    <LoginContainer>
      <div className="container">
        <div className="inputContainer">
          <input
            onChange={(e: any) => handleLogin(e.target)}
            name="email"
            type="text"
          />
        </div>
        <div className="inputContainer">
          <input
            onChange={(e: any) => handleLogin(e.target)}
            name="password"
            type="password"
          />
        </div>
        <div className="inputContainer">
          <Button
            width="110px"
            color="#664b8e"
            text="Sign In"
            onClick={() => login(email, password)}
          />
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
