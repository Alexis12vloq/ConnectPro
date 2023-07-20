import './MenuElementsCard.scss';
import { React, useState, useEffect } from 'react';
import { AiTwotoneStar } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { Link } from "react-router-dom";

import {
    Button, UncontrolledPopover, PopoverHeader, PopoverBody
} from 'reactstrap';
function MenuElementsCard({ mostrarinfo, setMostrarInfo, productoInfo, setProductoInfo, total, setTotal, productocarrito, setProductoCarrito, producto }) {
    const [opacity, setOpacity] = useState(0)

    function Agregar() {
        var verdad = ''
        if (productocarrito.length == 0) {
            setProductoCarrito([...productocarrito, producto])
            setTotal(total + producto.price)
        } else {
            var k = 0;
            for (let i = 0; i < productocarrito.length; i++) {
                if (productocarrito[i].id == producto.id) {
                    k = 1
                    i = productocarrito.length
                }

            }
            if (k == 0) {
                setProductoCarrito([...productocarrito, producto])
                setTotal(total + producto.price)
            }

        }
    }

    function MostrarInfo() {
        setProductoInfo(producto)
        console.log(producto)
        const Efecto = () => {

            setMostrarInfo(true)


        }
        Efecto()
    }
    return (

        <div className="MenuElementsCardContainer">
            <div style={{ backgroundImage: `url(${producto.image})` }} className="MenuElementsCardContainerImage">
                <div className="MenuElementsCardContainerImageContainer">
                    <button onClick={Agregar} ><BsFillCartPlusFill /></button>

                    <button id="Info" onClick={MostrarInfo}><BiMessageSquareAdd /></button>


                </div>
            </div>
            <div className="MenuElementsCardContainerDescription">
                <div className="MenuElementsCardContainerDescriptionContainer">
                    <div className="MenuElementsCardContainerDescriptionContainerTitle">
                        <div className="MenuElementsCardContainerDescriptionContainerTitleH2">
                            <h2>{producto.title}</h2>
                        </div>
                        <div className="MenuElementsCardContainerDescriptionContainerTitlePrecio">
                            <p>${producto.price}</p>
                        </div>
                    </div>
                    <div className="MenuElementsCardContainerDescriptionContainerEstrellas">
                        <div className="MenuElementsCardContainerDescriptionContainerEstrellasIcons">
                            <div>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                        </div>
                        <div className="MenuElementsCardContainerDescriptionContainerRewies">
                            <div className="MenuElementsCardContainerDescriptionContainerRewiesContainer">

                                <p>{producto.rating.count} Stocks</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MenuElementsCard;