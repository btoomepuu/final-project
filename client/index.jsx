import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
// import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
