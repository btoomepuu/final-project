import React, { useState } from 'react';

import Login from './login';

export default function LoginSignup({ setAuth }) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const body = { name, email, password };

      const response = await fetch('/auth/register', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      localStorage.setItem('token', parseRes.token);
      setAuth(true);

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="row log-sign-container">
      <Login />
      <div className="signnup-container">
        <section className="log-sign-head">
          <h2 className="log-sign-title">
            Did you just start your subscription?
          </h2>
          <h4 className="log-sign-text">
            Register here to access your account:
          </h4>
        </section>

        <section className="form" onSubmit={onSubmit}>
          <form >
            <div className="form-group">
              <p>Name</p>
              <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                />
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
            </div>
            <div className="form-group">
              <p>Password</p>
              <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
            </div>
            <div className="form-group">
              <button className="btn" >Register</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
