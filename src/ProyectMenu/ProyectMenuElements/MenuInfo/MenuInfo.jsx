import './MenuInfo.scss';
import { AiTwotoneStar } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { TiArrowBackOutline } from 'react-icons/ti'
import { TiArrowLeftThick } from 'react-icons/ti'
function MenuInfo({ total, setTotal, productocarrito, setProductoCarrito, mostrarinfo, setMostrarInfo, productoInfo, setProductoInfo }) {

    function AgregarCarrito() {
        var verdad = ''
        if (productocarrito.length == 0) {
            setProductoCarrito([...productocarrito, productoInfo])
            setTotal(total + productoInfo.price)
        } else {
            var k = 0;
            for (let i = 0; i < productocarrito.length; i++) {
                if (productocarrito[i].id == productoInfo.id) {
                    k = 1
                    i = productocarrito.length
                }

            }
            if (k == 0) {
                setProductoCarrito([...productocarrito, productoInfo])
                setTotal(total + productoInfo.price)
            }

        }
    }

    return (
        <div className="MenuInfo">
            <div className="MenuInfoContainerImage">
                <div style={{ backgroundImage: `url(${productoInfo.image}` }} className="MenuInfoContainerImageBack">

                    <TiArrowLeftThick onClick={() => { setMostrarInfo(false) }} className='FlechaIcon' />

                </div>
            </div>
            <div className="MenuInfoContainerInfo">
                <div className='MenuInfoContainerInfoContainer'>
                    <div className='MenuInfoContainerInfoContainerTitle'>
                        <h1>{productoInfo.title}</h1>
                        <h2>{productoInfo.category}</h2>
                        <p>Calidad en tus manos</p>
                    </div>
                    <div className="MenuInfoContainerInfoContainerEstrellas">
                        <div className='MenuInfoContainerInfoContainerEstrellasContainer'>
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                        </div>
                        <div className="MenuInfoContainerInfoContainerEstrellasRewies">
                            45  Reviews
                        </div>

                    </div>
                    <div className="MenuInfoContainerInfoContainerDescription">
                        <h4><span>Description</span> {productoInfo.description}</h4>
                    </div>
                    <div className="MenuInfoContainerInfoContainerAgregarCarrito">
                        <div className="MenuInfoContainerInfoContainerAgregarCarritoButton">
                            <button onClick={AgregarCarrito} type="button" className="ButtonAgregarCarrito"><BsFillCartPlusFill className='Icono' />Agregar a Carrito</button>
                        </div>
                        <div className="MenuInfoContainerInfoContainerAgregarPrice">
                            <p>$ {productoInfo.price}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
export default MenuInfo;