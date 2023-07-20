import './Inicio.scss'
import { AiOutlineLoading } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useEffect } from "react"

function Inicio() {
    useEffect(() => {
        function Click() {
            document.getElementById('LinkLogin').click();
        }
        setTimeout(Click, 1000)

    }, []);

    return (
        <div className="Inicio">
            <div className="InicioContainer">
                <AiOutlineLoading className='Loading' />
                <Link id='LinkLogin' to="/login"></Link>
            </div>
        </div>
    );
}

export default Inicio;