import React from 'react';
import HelloWorld from '../components/hello-world';
import NavBar from '../components/nav-bar';

export default function Home(props) {
  return (
    <div>
      <NavBar />
      <HelloWorld />
    </div>
  );
}
