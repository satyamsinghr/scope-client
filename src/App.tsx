import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
