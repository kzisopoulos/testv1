import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

import spoon from "../assets/spoon.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError, isPending, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);

    setUsername("");
    setPassword("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="form__title">
          <span className="form__icon">
            <img src={spoon} alt="spoon and knife" />
          </span>
          Login
          <span className="form__icon">
            <img src={spoon} alt="spoon and knife" />
          </span>
        </h3>
        <label className="form__control">
          <span style={error ? { color: "crimson" } : { color: "#222" }}>
            Username*
          </span>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setError(null)}
            className={error ? "input__error" : " "}
          />
        </label>
        <label className="form__control">
          <span style={error ? { color: "crimson" } : { color: "#222" }}>
            Password*
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? "input__error" : " "}
          />
        </label>
        <p className="error">{error}</p>
        <p className="small__text">
          Dont have an account ?{" "}
          <Link to="/signup" style={{ color: "blue" }}>
            Register an account
          </Link>
        </p>
        <button className="btn">{isPending ? "Logging in" : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;
