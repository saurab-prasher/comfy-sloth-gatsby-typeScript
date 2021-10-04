const isBrowser = typeof window !== `undefined`
import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductList from "../components/ProductList"
import { useSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

import Layout from "../components/Layout"

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          category
          colors
          company
          description
          featured
          id
          image
          name
          price
          shipping
        }
      }
    }
  }
`

const Products = () => {
  const {
    allProducts: { edges: node },
  } = useStaticQuery(query)

  const allProducts = node.map((item: any) => item.node)

  const { filters, sort: sortState } = useSelector(state => state.filter)

  const {
    loadProducts,
    filterProducts: filterAction,
    sortProducts,
  } = useActions()

  // Load products to filter list
  useEffect(() => {
    if (isBrowser) loadProducts(allProducts)
    else return
  }, [])

  // Sort and filter products
  useEffect(() => {
    // Order is important here First filter and then sort
    if (isBrowser) {
      filterAction()
      sortProducts()
    } else return

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortState, filters])

  const { error } = useSelector(state => state.allProducts)

  const { productsView, sort, filterProducts } = useSelector(
    state => state.filter
  )

  const { updateSort, changeView } = useActions()

  if (error) {
    return <h1>Something Went Wrong!</h1>
  }

  return (
    <Layout>
      <ProductList
        updateSort={updateSort}
        changeView={changeView}
        productsView={productsView}
        sort={sort}
        filterProducts={filterProducts}
      />
    </Layout>
  )
}

export default Products
