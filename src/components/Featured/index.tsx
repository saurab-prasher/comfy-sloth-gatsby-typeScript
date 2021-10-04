import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  FeaturedContainer,
  FeaturedH2,
  FeaturedInner,
  FeaturedCards,
} from "./FeaturesElements"

import { Link } from "gatsby"

import Loading from "../Loading"
import Card from "../Card"

import { useSelector } from "../../hooks/useTypedSelector"

export const query = graphql`
  {
    allProducts(filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          image
          name
        }
      }
    }
  }
`

const Featured: React.FC = () => {
  const {
    allProducts: { edges: featured },
  } = useStaticQuery(query)

  const { loading } = useSelector(state => state.allProducts)

  return (
    <FeaturedContainer>
      {loading ? (
        <Loading mainPage={true} />
      ) : (
        <FeaturedInner>
          <FeaturedH2>Check out these new releases</FeaturedH2>

          <FeaturedCards>
            {featured.map(({ node: item }: any) => {
              return <Card key={item.id} {...item} />
            })}
          </FeaturedCards>
          <Link className="btn btn--primary" to="/products">
            All Products
          </Link>
        </FeaturedInner>
      )}
    </FeaturedContainer>
  )
}

export default Featured
