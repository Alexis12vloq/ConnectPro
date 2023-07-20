import './Nav.scss'
import CardCarrito from './CardCarrito/CardCarrito'
import { ImCart } from 'react-icons/im'
import { FaAngleLeft, FaHospitalAlt } from 'react-icons/fa'
import { React, useState, useEffect, Component } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { auth } from '../../../firebase.js'




function Nav({ total, setTotal, productocarrito, setProductoCarrito }) {
    const [open, setOpen] = useState(false)
    const [box, setBox] = useState('none')
    const user = auth.currentUser
    var Usuario = ''
    if (user != null) {
        Usuario = user.auth.currentUser.displayName;

    } else {
        Usuario = 'Bienvenido'
    }
    const [nameusuario, setNameusuario] = useState(Usuario);


    const [botoncompra, setBotonCompra] = useState('Agrege un Producto')
    window.addEventListener('scroll', (event) => {
        if (window.scrollY > 50) {
            setBox('rgba(0,0,0,0.2) 0px 5px 10px 0px')
        } else {
            setBox('none')
        }
    });


    return (
        <div className="Nav">
            <Offcanvas direction="end" isOpen={open} >
                <div className="CarritoNav">
                    <div className="CarritoNavContainer">
                        <div onClick={() => { setOpen(false) }} className="CarritoNavContainerFlecha">
                            <FaAngleLeft />

                        </div>
                    </div>
                    <div className="CarritoNavContainerTitle">
                        <div className="CarritoNavContainerTitleContainer">
                            <h2>Mi Carrito</h2>
                        </div>
                    </div>
                </div>
                <div className="CarritoCards">
                    {productocarrito.map((product) => <CardCarrito botoncompra={botoncompra} setBotonCompra={setBotonCompra} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} product={product} />)}
                </div>
                <div className='CarritoTotal'>
                    <div className='CarritoTotalContainer'>
                        <div className='CarritoTotalContainerPrecio'>
                            <p>Total</p>
                            <h4>${Math.round(total)}</h4>
                        </div>
                        <div className='CarritoTotalContainerButton'>
                            <button>{botoncompra}</button>
                        </div>
                    </div>
                </div>
            </Offcanvas>
            <div style={{ boxShadow: box }} className="NavContenedor">
                <div className="NavCategorias">
                    <div className="NavCategoriasCategorias">
                        <h3>Categorias</h3>
                        <h3>Sobre Nosotros</h3>
                        <h3>Sustentabilidad</h3>
                    </div>
                    <div className="NavCategoriasLogo">
                        <div className="NavCategoriasLogoImage">

                        </div>
                    </div>
                    <div className="NavCategoriasCarContainer">
                        <div onClick={() => { setOpen(true) }} className="NavCategoriasCarContainerCarritos">
                            <ImCart className='CarritoIcons' />
                            <div className="CantidadProductos">
                                {productocarrito.length}
                            </div>
                            <h3>Carrito</h3>
                        </div>
                        <div className="NavCategoriasCarContainerLogin">
                            <h3>{nameusuario}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;