import './MenuElements.scss'
import { React, useState, Component, useEffect } from 'react';
import algoliasearch from 'algoliasearch';
import MenuElementsCard from './MenuElementsCards/MenuElementsCard/MenuElementsCard.jsx';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    connectHits,
    HierarchicalMenu,
    Panel,
    SortBy,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import pordata from '../../../ProyectLogin/perfilimagen.jpg'

const searchClient = algoliasearch(
    'WIDOMUDAKY',
    '63ad84ed366210b8d703e51cfcb70dbb'
);

function MenuElements({ setcategory, category, mostrarinfo, setMostrarInfo, productoInfo, setProductoInfo, total, setTotal, productocarrito, setProductoCarrito }) {
    const [categorias, setCategorias] = useState([{ value: 'electronics', nombre: "Electronica" }, { value: 'jewelery', nombre: "Joyeria" }, { value: "men's clothing", nombre: "Ropa de Hombre" }, { value: "women's clothing", nombre: "Ropa de Mujer" }])
    const [cardBusqueda, setCardBusqueda] = useState([])
    const [cardBusquedaMap, setCardBusquedaMap] = useState([])
    const [busquedaBoolean, setBusquedaBoolean] = useState(true)


    function Hit(producto) {
        return (
            <div>


                <div className="hit-description">
                    {producto.hit.title}
                </div>

            </div>
        );
    }
    const Hits = ({ hits }) => (
        <div className="HitsContainer">
            {hits.map(hit => (
                <MenuElementsCard productoInfo={productoInfo} setProductoInfo={setProductoInfo} mostrarinfo={mostrarinfo} setMostrarInfo={setMostrarInfo} key={hit.id} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} producto={hit} />
            ))}
        </div>
    );

    const CustomHits = connectHits(Hits);

    var es = []
    function BusquedaProducto(e) {
        console.log(e.target.value.toLowerCase());
        var total = []
        es = cardBusqueda.filter((filter) => {
            if (filter.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                return total.push(filter)
            }
        }
        )
        console.log(total)
        setCardBusquedaMap(total)
        if (e.target.value == '') {
            setCardBusquedaMap([])
        }
    }

    useEffect(() => {
        setProductoCarrito(productocarrito);
        setcategory(category);
        fetch(`https://fakestoreapi.com/products/`)
            .then(response => response.json())
            .then(data => {

                setCardBusqueda(data)
            });

    }, []);




    return (
        <InstantSearch indexName="steadyy_index" searchClient={searchClient}>

            <div className="MenuElements">
                <div className="MenuElementsNuestrosProductos">
                    <div className="MenuElementsNuestrosProductosContent">
                        <div 
                        style={{
                            marginTop: '10px',
                        }}className="MenuElementsNuestrosProductosContentH1">
                            <h1>Gestiona Tus Clientes </h1>
                        </div>
                        <div className="MenuElementsNuestrosProductosContentP">
                            <p>Crea tu propio Impacto y Consturye Clientes de Calidad</p>
                        </div>
                    </div>
                </div>
                <div className="MenuElmentsNuestrosContainer">
                    <div className="MenuElmentsNuestrosContainerColecciones">
                        <div className="MenuElmentsNuestrosContainerColeccionesContainer">
                            <div className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                <h2>Mas Herramientas</h2>
                            </div>
                            <div className="MenuElmentsNuestrosContainerColeccionesContainerTodos">

                                <button onClick={() => { setBusquedaBoolean(true) }}>Busqueda de Cientes</button>
                                <button onClick={() => { setcategory("men's clothing") }}>Gestion de Clientes</button>
                                <button onClick={() => { setcategory("women's clothing") }}>Guiones de Llamadas</button>
                                <button onClick={() => { setcategory("jewelery") }}>Seguimiento de Tickets</button>
                                <button onClick={() => { setcategory("electronics") }}>Support</button>
                            </div>
                        </div>
                    </div>
                    <div className="MenuElementsNuestrosContainerProducts">

                            {busquedaBoolean === true ? <>
                                <div 
                             style={{
                                marginTop: "20px",

                             }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                <h2 style={{fontSize:"37px",fontWeight:"300"}}>Busqueda de Cientes</h2>
                            </div>
                            <div style={{padding:"20px"}}>
                                <form>
                                <div  style={{paddingBottom:"40px"}} class="row">
                                    <div class="col">
                                    <input type="text" class="form-control" placeholder="First name"/>
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div style={{paddingBottom:"40px"}} class="row">
                                    <div class="col">
                                    <input type="correo" class="form-control" placeholder="Correo"/>
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control" placeholder="Telefono"/>
                                    </div>
                                </div>
                                <div   style={{paddingBottom:"40px"}} class="row">
                                    <div class="col">
                                    <input type="date" class="form-control" placeholder="Date"/>
                                    </div>
                                    <div class="col">
                                        <select id="inputState" class="form-control">
                                        <option value="">Selecciona un departamento</option>
                                        <option value="Amazonas">Amazonas</option>
                                        <option value="Áncash">Áncash</option>
                                        <option value="Apurímac">Apurímac</option>
                                        <option value="Arequipa">Arequipa</option>
                                        <option value="Ayacucho">Ayacucho</option>
                                        <option value="Cajamarca">Cajamarca</option>
                                        <option value="Callao">Callao</option>
                                        <option value="Cusco">Cusco</option>
                                        <option value="Huancavelica">Huancavelica</option>
                                        <option value="Huánuco">Huánuco</option>
                                        <option value="Ica">Ica</option>
                                        <option value="Junín">Junín</option>
                                        <option value="La Libertad">La Libertad</option>
                                        <option value="Lambayeque">Lambayeque</option>
                                        <option value="Lima">Lima</option>
                                        <option value="Loreto">Loreto</option>
                                        <option value="Madre de Dios">Madre de Dios</option>
                                        <option value="Moquegua">Moquegua</option>
                                        <option value="Pasco">Pasco</option>
                                        <option value="Piura">Piura</option>
                                        <option value="Puno">Puno</option>
                                        <option value="San Martín">San Martín</option>
                                        <option value="Tacna">Tacna</option>
                                        <option value="Tumbes">Tumbes</option>
                                        <option value="Ucayali">Ucayali</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                   
                                </div>
                                <button onClick={() => setBusquedaBoolean(false)} class="btn btn-primary">Buscar</button>
                                
                                </form>
                            </div>
                            </> : <div style={{width:"100%",height:"110vh"}}>
                                    <div 
                                    style={{
                                        marginTop: "20px",

                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                        <h2 style={{fontSize:"37px",fontWeight:"300"}}>Detalles </h2>
                                    </div>
                                    <div style={{width:"100%",height:"auto",display:"flex"}}>
                                        <div style={{width:"25%",height:"100%"}}>
                                            <div style={{width:"100%",height:"100%"}}>
                                                <div style={{width:"100%",height:"40%"}}>
                                                    <div style={{width:"100%",height:"100%"}}>
                                                        <img src={pordata} style={{width:"100%",
                                                        height:"100%",padding:"0px",borderRadius:"100%"}} />
                                                    </div>
                                                </div>
                                                <div style={{width:"100%",height:"60%",justifyContent:"center"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{fontSize:"30px",fontWeight:"300"}}>Roberto Gomez </h2>
                                                    </div>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                                                <ul class="list-group list-group-flush">
                                                <li class="list-group-item">CorreoCliente@gmail.com </li>
                                                <li class="list-group-item">754-4455-544</li>
                                                <li class="list-group-item">ATE. Av. 15 de Julio Mz. A Lt. 39 Zona A</li>
                                                </ul>
                                                </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div style={{width:"80%",height:"auto"}}>
                                            <div style={{width:"100%",height:"100%",flexWrap:"wrap",display:"flex",justifyContent:"space-around"}}>
                                                <div style={{width:"40%"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                        backgroundColor: "#455a94",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{color:"white",fontSize:"20px",fontWeight:"300"}}>Nombre Y Apellido </h2>
                                                    </div>
                                                    <div style={{fontSize:"15px"}}>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Roberto</li>
                                                        <li class="list-group-item">Gomez</li>
                                                        <li class="list-group-item">Bolaños</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div style={{width:"40%"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                        backgroundColor: "#455a94",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{color:"white",fontSize:"20px",fontWeight:"300"}}>Edad y Genero</h2>
                                                    </div>
                                                    <div style={{fontSize:"15px"}}>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">28 años</li>
                                                        <li class="list-group-item">15 de mayo de 1995</li>
                                                        <li class="list-group-item">Genero : Mascukino</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div style={{width:"40%"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                        backgroundColor: "#455a94",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{color:"white",fontSize:"20px",fontWeight:"300"}}>Lugar de Residencia</h2>
                                                    </div>
                                                    <div style={{fontSize:"15px"}}>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Calle 123</li>
                                                        <li class="list-group-item">Barrio ABC</li>
                                                        <li class="list-group-item">Ciudad Z </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div style={{width:"40%"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                        backgroundColor: "#455a94",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{color:"white",fontSize:"20px",fontWeight:"300"}}>Hobbies e Intereses</h2>
                                                    </div>
                                                    <div style={{fontSize:"15px"}}>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Cocinar, Jardinería, Senderismo</li>
                                                        <li class="list-group-item">Arte y Diseño</li>
                                                        <li class="list-group-item">Ecología, Viajes </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div style={{width:"40%"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                        backgroundColor: "#455a94",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{color:"white",fontSize:"20px",fontWeight:"300"}}>Estado Civil </h2>
                                                    </div>
                                                    <div style={{fontSize:"15px"}}>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Soltera</li>
                                                        <li class="list-group-item">No Aplica</li>
                                                        <li class="list-group-item">Sin Hijos</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div style={{width:"40%"}}>
                                                    <div 
                                                    style={{
                                                        marginTop: "20px",
                                                        justifyContent: "center",
                                                        backgroundColor: "#455a94",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        
                                                    }}className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                                                        <h2 style={{color:"white",fontSize:"20px",fontWeight:"300"}}>Jhon MacKlein </h2>
                                                    </div>
                                                    <div style={{fontSize:"15px"}}>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">CorreoCliente@gmail.com</li>
                                                        <li class="list-group-item">754-4455-544</li>
                                                        <li class="list-group-item">ATE. Av. 15 de Julio Mz. A Lt. 39 Zona A </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div>}
                            


                            
                        
                    </div>
                </div>
            </div>
        </InstantSearch>

    )
}
export default MenuElements;