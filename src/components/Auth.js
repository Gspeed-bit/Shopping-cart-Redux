import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/User";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <div>
      <h1>Living Logos </h1>
      <form onSubmit={handleSubmit}>
        <img src="" alt="" />
        <label>
          Full Name:
          <input type="text" name="name" placeholder="Full Name" required/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" required/>
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Auth;
