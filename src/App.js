import './App.css';
import Login from './ProyectLogin/Login.jsx';
import Menu from './ProyectMenu/Menu.jsx';
import Inicio from './Inicio/Inicio.jsx';
import { React, useState, useEffect } from 'react';
import { Routes, Route, } from "react-router-dom";

function App() {
  const [correos, setCorreo] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => {
        var user = []
        for (let j = 0; j < data.length; j = j + 1) {
          user.push({ email: data[j].email, password: data[j].password })
          setCorreo(user)

        }
      });

  }, [])

  return (
    <div className="App">
      <div className="Login">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login setCorreo={setCorreo} correos={correos} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<p>ERROR 404</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
