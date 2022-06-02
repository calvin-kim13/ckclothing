import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import "./checkout.styles.scss"

const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)

    return (
        <div>
            <h1>checkout</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const {id, name, quantity} = cartItem
                        return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={() => removeItemFromCart(cartItem)}>minus</span>
                            <span onClick={() => addItemToCart(cartItem)}>add</span>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Checkout