import './CardCarrito.scss';
import { React, useState, useEffect } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import { IoIosAdd } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs'
function CardCarrito({ setBotonCompra, botoncompra, total, setTotal, productocarrito, product, setProductoCarrito }) {

    const [cantidad, setCantidad] = useState(1)
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador

        if (productocarrito[0] == '') {
            setTotal(0)
            setBotonCompra('Agrege un Producto')
        } else {
            setBotonCompra('Completar Compra')



        }
        setCantidad(cantidad)


    }, [cantidad]);

    // Actualiza el título del documento usando la API del navegador

    function Eliminar() {
        setProductoCarrito(productocarrito.filter((filter) => filter != product))
        setBotonCompra('Agrege un Producto')
        setTotal(total - product.price * cantidad)

    }
    function Sumar() {

        if (productocarrito.length != 0) {
            setTotal(total + product.price)
            setCantidad(cantidad + 1)
            setBotonCompra('Completar Compra')
        }

    }
    function Restar() {
        if (cantidad > 1) {

            if (productocarrito.length != 0) {
                setTotal(total - product.price)
                setProductoCarrito(productocarrito)
                setBotonCompra('Completar Compra')

                setCantidad(cantidad - 1)
            }
        }
    }
    return (
        <div className="CardCarrito">
            <div className="CardCarritoContainer">
                <div className="CardCarritoContainerImage">
                    <div style={{ backgroundImage: `url(${product.image})` }} className="CardCarritoContainerImageContainer">

                    </div>
                </div>
            </div>
            <div className="CardCarritoContainerTitle">
                <div className="CardCarritoContainerTitleContainer">
                    <div className="CardCarritoContainerTitleContainerH2">
                        <h3>{product.title}</h3>
                        <h4>{product.category}</h4>
                        <p>Calidad</p>
                    </div>
                </div>
                <div className="CardCarritoContainerEnvio">
                    <div className="CardCarritoContainerEnvioIcon">
                        <AiOutlineFieldTime />
                        <p>Se envia en 7-10 días</p>
                    </div>
                </div>
                <div className="CardCarritoContainerContador">
                    <div className="CardCarritoContainerContadorContainer">
                        <div onClick={Restar} className="CardCarritoContainerContadorContainerResta">
                            <GrFormSubtract />
                        </div>
                        <div className="CardCarritoContainerContadorContainerNumber">
                            <p>{cantidad}</p>
                        </div>
                        <div onClick={Sumar} className="CardCarritoContainerContadorContainerSuma">
                            <IoIosAdd />
                        </div>
                    </div>
                </div>
            </div>
            <div className="CardCarritoContainerEliminar">
                <div className="CardCarritoContainerEliminarContainer">
                    <div onClick={Eliminar} className="CardCarritoContainerEliminarContainerIcon">
                        <BsTrash />
                    </div>
                    <div className="CardCarritoContainerEliminarContainerNumber">
                        <h4>${Math.round(product.price)}</h4>
                        <h5>${Math.round(product.price) + Math.round(product.price * 20 / 100)}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCarrito;