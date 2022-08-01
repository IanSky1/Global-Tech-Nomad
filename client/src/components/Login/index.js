import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      return error
    }
  };

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

  return (
    <div className="login">
      <form onSubmit={handleFormSubmit}>
        <h2 className="loginHeader"> Login to Get started:</h2>
        <div className="loginUn">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="loginPw">
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="******"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className="loginSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div>Login failed</div>}
    </div>
  );
}

export default Login;
