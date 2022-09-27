import React, { useState, useEffect } from 'react';

export default function Account({ setAuth }) {
  const [name, setName] = useState('');

  async function getName() {
    try {
      const response = await fetch('/account/', {
        method: 'GET',
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      setName(parseRes.name);

    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  };
  useEffect(() => { getName(); }, []);

  return (
    <>
      <h1>{name}</h1>
      <button onClick={logout}>logout</button>
    </>
  );
}
