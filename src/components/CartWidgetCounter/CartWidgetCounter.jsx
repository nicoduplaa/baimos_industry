import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartWidgetCounter.css'


const CartWidgetCounter = () => {
    const {totalCant} = useContext(CartContext)

    if (totalCant() > 0) {
        return (
            <div className="counter">
                <p>{totalCant()}</p>
            </div>
            )
    }

}

export default CartWidgetCounter