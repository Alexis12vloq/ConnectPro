import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { auth } from '../firebase.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login({ correos, setCorreo }) {
    const correct = {
        border: 'solid 1px #84CEC2',
        opacity: 0
    };

    const incorrect = {
        border: 'solid 1px #ff00004b',
        opacity: 1
    };

    const [user, setUser] = useState([0]);
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();
    const [registraremail, setRegistrarEmail] = useState();
    const [registrarcontraseña, setRegistrarContraseña] = useState();
    const [stylePasword, setStylePasword] = useState(correct);
    const [styleCorreo, setStyleCorreo] = useState(correct);
    const [styleCorreoRegistrar, setStyleCorreoRegistrar] = useState(correct);
    const googleProvider = new GoogleAuthProvider();

    function RegistrarEmail(e) {
        setRegistrarEmail(e.target.value);

        if (e.target.value === "") {
            setStyleCorreoRegistrar(correct);
        } else {
            setStyleCorreoRegistrar(incorrect);
        }

        if (e.target.value.includes("@") === true) {
            if (e.target.value.includes(".") === true) {
                setStyleCorreoRegistrar(correct);
            } else {
                setStyleCorreoRegistrar(incorrect);
            }
        }
    }

    function RegistrarContraseña(e) {
        setRegistrarContraseña(e.target.value);
    }

    
    function Header() {
      const [open, setOpen] = useState(false);
    
      return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand logonav" to="/"></Link>
              <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/clientes">Gestión de Clientes</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/guiones">Guiones de Llamadas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tickets">Seguimiento de Tickets</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
          <Offcanvas isOpen={open} toggle={() => setOpen(!open)}>
            <OffcanvasHeader closeButton>
              <h5>Menú</h5>
            </OffcanvasHeader>
            <OffcanvasBody>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/clientes">Gestión de Clientes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/guiones">Guiones de Llamadas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tickets">Seguimiento de Tickets</Link>
                </li>
              </ul>
            </OffcanvasBody>
          </Offcanvas>
        </header>
      );
    }
    
    async function RegistrarLogin(e) {
        e.preventDefault();
        console.log("Submit");
        // try {
        //     await createUserWithEmailAndPassword(auth, registraremail, registrarcontraseña);
        // } catch (error) {
        //     console.log(error.message);
        // }

        var user = [];
        console.log(registrarcontraseña, registraremail);
        correos.push({ email: registraremail, password: registrarcontraseña });
        setCorreo(correos);
        setOpen(false);
    }

    function EmailChange(e) {
        setCorreo(correos);
        setEmail(e.target.value);
        if (e.target.value === '') {
            setStyleCorreo(correct);
        }
        setUser(correos.find(element => element.email === email));
    }

    function ContraseñaChange(e) {
        setCorreo(correos);
        if (e.target.value === '') {
            setStylePasword(correct);
        }
        setContraseña(e.target.value);
        setUser(correos.find(element => element.email === email));
    }

    async function Submit(e) {
        e.preventDefault();
        console.log("Submit");
        try {
            await signInWithEmailAndPassword(auth, email, contraseña);
            document.getElementById('LinkMenu').click();
            console.log("Registro");
        } catch (error) {
            console.log(error.message);
            if (error.message === 'Firebase: Error (auth/user-not-found).') {
                setStylePasword(correct);
                setStyleCorreo(incorrect);
            }
            if (error.message === 'Firebase: Error (auth/wrong-password).') {
                setStyleCorreo(correct);
                setStylePasword(incorrect);
            }
        }
    }

    async function RegistrarGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
            const user = auth.currentUser;
            console.log(user.auth.currentUser.displayName);
            setOpen(false);
            document.getElementById('LinkMenu').click();
        } catch {}
    }

    function BuscarLogin() {
        setCorreo(correos);
        if (correos.map((user) => user.email).includes(email)) {
            setStylePasword(correct);
        } else {
            setStyleCorreo(incorrect);
        }
        if (email === undefined || email === "") {
            setStyleCorreo(incorrect);
        }

        if (user.password === contraseña) {
            if (user.password !== undefined) {
                setStylePasword(correct);
                document.getElementById('LinkMenu').click();
            }
        } else {
            setStylePasword(incorrect);
        }

        if (user.email === email) {

        } else {
            setStyleCorreo(incorrect);
        }
    }

    return (
        <div className="Login">
            <Header/>
            <div className="LoginContainer">
                <div className="LoginPortada">
                    <div className="LoginPortadaImage"></div>
                </div>

                <div className="LoginInput">
                    <div className="LoginInputContainer">
                        <div className="LoginInputContainerInicio">
                            <div className='LoginLogo'>
                                <div className='LoginLogoImage'></div>
                            </div>
                            <div className="LoginInputContainerInicioTitle">
                                <h1>Iniciar Sesión</h1>
                                <div>
                                    <Offcanvas direction="end" isOpen={open}>
                                        <OffcanvasHeader toggle={() => setOpen(false)}>
                                            <p className="RegistrarseTitle">Registrate en Steady</p>
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            <form onSubmit={RegistrarLogin}>
                                                <div className="LoginInputContainerInicioInputs Center">
                                                    <div className="LoginInputContainerInicioInputsCorreo">
                                                        <h5>Ingresa tu Correo</h5>
                                                        <input
                                                            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                                                            onChange={RegistrarEmail}
                                                            id="emailregistro"
                                                            type="email"
                                                            placeholder="Correo"
                                                            required
                                                        />
                                                        <p style={{ opacity: styleCorreoRegistrar.opacity }}>
                                                            El correo debe incluir (@) y formato '.com'
                                                        </p>
                                                    </div>
                                                    <div className="LoginInputContainerInicioInputsClave">
                                                        <h5>Ingresa una Contraseña</h5>
                                                        <input
                                                            onChange={RegistrarContraseña}
                                                            type="password"
                                                            placeholder="Ingrese la Contraseña"
                                                        />
                                                    </div>
                                                    <div className="LoginInputContainerInicioButtumInicio Padding">
                                                        <button type="submit" className="InicioButton">
                                                            Registrarse
                                                        </button>
                                                    </div>
                                                    <div className="LoginInputContainerInicioButtumInicio Padding">
                                                        <button onClick={RegistrarGoogle} type="button" className="InicioButton">
                                                            <FcGoogle className="Google" /> Registrarse con Google
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </OffcanvasBody>
                                    </Offcanvas>
                                </div>
                                <h2>
                                    Inicia sesión para Ingresar Y Poder Conectar mas Personas.
                                </h2>
                            </div>
                            <div className="LoginInputContainerInicioBack">
                                <div className="LoginInputContainerInicioBackLine"></div>
                                <div className="LoginInputContainerInicioBackTitle">
                                    <h3>inicie sesión a continuacion</h3>
                                </div>
                                <div className="LoginInputContainerInicioBackLine"></div>
                            </div>
                            <form className="Form" onSubmit={Submit}>
                                <div className="LoginInputContainerInicioInputs">
                                    <div className="LoginInputContainerInicioInputsCorreo">
                                        <input
                                            onFocus={EmailChange}
                                            style={{ border: styleCorreo.border }}
                                            onChange={EmailChange}
                                            id="emaill"
                                            type="text"
                                            placeholder="Correo"
                                            required
                                        />
                                        <p style={{ opacity: styleCorreo.opacity }}>Ingrese un Correo Valido</p>
                                    </div>
                                    <div className="LoginInputContainerInicioInputsClave">
                                        <input
                                            id="password"
                                            onFocus={ContraseñaChange}
                                            style={{ border: stylePasword.border }}
                                            onChange={ContraseñaChange}
                                            type="password"
                                            placeholder="Contraseña"
                                            required
                                        />
                                        <p style={{ opacity: stylePasword.opacity }}>Contraseña invalida</p>
                                    </div>
                                </div>
                                <Link id="LinkMenu" to="/menu"></Link>
                                <div className="LoginInputContainerInicioButtumInicio">
                                    <button type="submit" className="InicioButton">
                                        Iniciar
                                    </button>
                                </div>
                            </form>
                            <div className="LoginInputContainerInicioCrearCuenta">
                                <h3 className="Registroo">Si no tienes una cuenta Registrate</h3>
                                <p onClick={() => setOpen(true)}>Registrarse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
