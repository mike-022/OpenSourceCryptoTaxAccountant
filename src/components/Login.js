import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login/Create Account Page</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Login;
