import React from "react"
import { formatPrice } from "../../utils/helper"
import { Link } from "gatsby"
import Stars from "./Stars"
import AddToCart from "../AddToCart"
import Gallery from "../Gallery"

import {
  SinglePageH1,
  SinglePageImg,
  SinglePageText,
  SinglePageMain,
  ReviewsContainer,
  Price,
  Description,
  Available,
  Wrapper,
} from "./SinglePageElements"

interface SinglePageProps {
  singleProduct: any
  error: boolean
}

const SinglePage: React.FC<SinglePageProps> = ({ singleProduct, error }) => {
  const {
    name,
    images,
    stars,
    price,
    description,
    id: SKU,
    company,
    reviews,
    stock,
  } = singleProduct

  if (error) {
    return <h1>Something went wrong!</h1>
  }

  return (
    <Wrapper>
      <header className="header">
        <Link to="/products" className="btn btn--secondary">
          back to products
        </Link>
      </header>
      <SinglePageMain>
        <SinglePageImg>
          <Gallery images={images} />
        </SinglePageImg>
        <SinglePageText>
          <SinglePageH1>{name}</SinglePageH1>
          <ReviewsContainer>
            <Stars stars={stars} />
            <p>({reviews} Customer reviews)</p>
          </ReviewsContainer>
          <Price> {formatPrice(price)}</Price>
          <Description>{description?.slice(0, 200)}</Description>
          <Available>
            <li>
              Available -
              <span> {stock > 0 ? "In Stock" : "out of stock"} </span>
            </li>
            <li>
              Brand - <span> {company} </span>
            </li>
          </Available>

          {stock > 0 && <AddToCart product={singleProduct} />}
        </SinglePageText>
      </SinglePageMain>
    </Wrapper>
  )
}

export default SinglePage
