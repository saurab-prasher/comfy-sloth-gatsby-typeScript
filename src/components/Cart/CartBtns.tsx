import React from "react"
import { Link } from "gatsby"

import { CartItemBtnContainer } from "./CartElements"

interface CartBtnsProps {
  clearCart: () => void
}
const CartBtns: React.FC<CartBtnsProps> = ({ clearCart }) => {
  return (
    <CartItemBtnContainer>
      <Link className="btn btn--secondary" to="/products">
        Continue Shopping
      </Link>
      <a href="#" className="btn btn--secondary " onClick={clearCart}>
        Clear Cart
      </a>
    </CartItemBtnContainer>
  )
}

export default CartBtns
