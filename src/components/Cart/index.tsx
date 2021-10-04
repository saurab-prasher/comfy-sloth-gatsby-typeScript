import React from "react"
import { Link } from "gatsby"
import { CartContainer } from "./CartElements"
import CartHeading from "./CartHeading"
import SingleCartItem from "./SingleCartItem"
import CartTotal from "./CartTotal"
import CartBtns from "./CartBtns"

import { useSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

export const Cart: React.FC = () => {
  const { clearCart, deleteItem, toggleCartItem } = useActions()

  const { cart, shippingFee, totalAmount } = useSelector(state => state.cart)
  const increase = (id: string, value: number) => {
    toggleCartItem(id, value)
  }
  const decrease = (id: string, value: number) => {
    toggleCartItem(id, value)
  }

  return (
    <CartContainer>
      {cart?.length === 0 ? (
        <div className="empty-cart">
          <h1>My cart</h1>
          <p>You have no items in your shopping cart.</p>

          <span>
            Click <Link to="/products">here</Link> to continue shopping
          </span>
        </div>
      ) : (
        <>
          <div>
            <CartHeading />

            <SingleCartItem
              cart={cart}
              increase={increase}
              decrease={decrease}
              deleteItem={deleteItem}
            />
          </div>

          <hr />
          <CartBtns clearCart={clearCart} />

          <CartTotal totalAmount={totalAmount} shippingFee={shippingFee} />
        </>
      )}
    </CartContainer>
  )
}
export default Cart
