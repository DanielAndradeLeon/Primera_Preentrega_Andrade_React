import './CartWidget.css';
import {GiShoppingCart} from "react-icons/gi";

const CartWidget = () => {
    return(
        <div className="contenedorCarrito">
            <div className="carrito">
                <spam className='cantidadCarrito'>13</spam>
                <GiShoppingCart size={40} />
            </div>
        </div>
    )
}

export default CartWidget