import React, { useEffect } from "react"
import Layout from "../components/Layout"
import SinglePageComp from "../components/SinglePage"

import Loading from "../components/Loading"
import { useSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
const isBrowser = typeof window !== `undefined`

const SinglePage = (props: any) => {
  const { singleProduct, loading, error } = useSelector(
    state => state.singleProduct
  )

  const { fetchSingleProduct } = useActions()

  useEffect(() => {
    if (isBrowser) {
      fetchSingleProduct(
        `${process.env.GATSBY_SINGLE_PRODUCT}${props?.pageContext?.node?.id}`
      )
    } else return
  }, [props?.pageContext?.node?.id])

  if (loading) {
    return (
      <Layout>
        <div className="loading-container">
          <Loading />
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <SinglePageComp singleProduct={singleProduct} error={error} />
    </Layout>
  )
}

export default SinglePage
