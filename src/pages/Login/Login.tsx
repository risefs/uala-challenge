import React, { useState } from "react";
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
      <input
        onChange={(e: any) => handleLogin(e.target)}
        name="email"
        type="text"
      />
      <input
        onChange={(e: any) => handleLogin(e.target)}
        name="password"
        type="password"
      />
      <button onClick={() => login(email, password)}>Sign In</button>
    </LoginContainer>
  );
};

export default Login;
