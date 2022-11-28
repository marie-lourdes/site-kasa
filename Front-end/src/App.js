import React from 'react';
import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([])
  console.log("data useState", data)
  useEffect(() => {


    fetch("http://localhost:8000/api-kasa/logements")
      .then(res => res.json())
      .then((data) => {
        setData(data?.appartmentData)
        console.log("data", data)
      })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
