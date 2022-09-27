import React, { useState } from 'react';

export default function Login({ setAuth }) {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const { email, password } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const body = { email, password };

      const response = await fetch('/auth/login', {
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
    <>
      <section className="log-sign-head">
        <h2>All ready registered?</h2>
        <h4>Signin here:</h4>
      </section>

      <section className="form" onSubmit={onSubmit}>
        <form >
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
            <button className="btn">Login</button>
          </div>
        </form>
      </section>
    </>
  );
}
