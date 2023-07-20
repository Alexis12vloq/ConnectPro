import './Menu.scss';
import { React, useState, useEffect } from 'react';
import Nav from './ProyectMenuElements/Nav/Nav'
import MenuElements from './ProyectMenuElements/MenuElements/MenuElements';
import MenuInfo from './ProyectMenuElements/MenuInfo/MenuInfo.jsx';
import { Link } from 'react-router-dom';
import {Offcanvas , OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
function Menu() {
    const [productocarrito, setProductoCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [productoInfo, setProductoInfo] = useState([])
    const [mostrarinfo, setMostrarInfo] = useState(false)
    const [category, setcategory] = useState('')

    useEffect(() => {
        setcategory(category)
    }, [])

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

    return (

        <div className="Menu">
            <div className="MenuContainer">
                <div className="NavContainer">
                <Header/>
                </div>
                <div className="MenuElementsContainer">
                    {mostrarinfo == false ? <MenuElements setcategory={setcategory} category={category} productoInfo={productoInfo} setProductoInfo={setProductoInfo} mostrarinfo={mostrarinfo} setMostrarInfo={setMostrarInfo} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} />
                        :

                        <MenuInfo total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} productoInfo={productoInfo} setProductoInfo={setProductoInfo} mostrarinfo={mostrarinfo} setMostrarInfo={setMostrarInfo} />

                    }

                </div>

            </div>
        </div>
    );
}

export default Menu;