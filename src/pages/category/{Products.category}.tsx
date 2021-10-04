import React from "react"
import Layout from "../../components/Layout"
import CategoryPage from "../../components/Category"

import { useStaticQuery, graphql } from "gatsby"

const Category = (props: any) => {
  const category = props?.params?.category?.replace(/-/g, " ")

  const {
    allProducts: { edges: node },
  } = useStaticQuery(graphql`
    {
      allProducts {
        edges {
          node {
            id
            category
            image
            name
          }
        }
      }
    }
  `)

  const categories = node
    ?.filter((item: any) => item?.node?.category === category)
    ?.map((item: any) => item?.node)

  return (
    <Layout>
      <CategoryPage categories={categories} category={category} />
    </Layout>
  )
}

export default Category
