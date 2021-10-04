import React from "react"
import { Link } from "gatsby"
import {
  ProductListSection,
  ProductListImage,
  ProductListText,
} from "./ProductElements"
import { formatPrice } from "../../utils/helper"

interface ProductView {
  products: any
}

const ProductListView: React.FC<ProductView> = ({ products }) => {
  return products.map((item: any) => {
    const { id, image, name, description, price } = item
    return (
      <ProductListSection key={id}>
        <ProductListImage>
          <img src={image} alt="fsd" />
        </ProductListImage>
        <ProductListText>
          <h1>{name}</h1>
          <h3>{formatPrice(price)}</h3>
          <p>{description.slice(0, 150)}</p>
          <Link className="btn btn--secondary" to={`/products/${id}`}>
            Details
          </Link>
          <hr />
        </ProductListText>
      </ProductListSection>
    )
  })
}

export default ProductListView
