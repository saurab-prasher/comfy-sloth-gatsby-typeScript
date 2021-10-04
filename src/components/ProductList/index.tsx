import React from "react"
import { ProductListContainer, NotFoundH1 } from "./ProductElements"

import ProductGridView from "./ProductGridView"
import ProductGridBtns from "./ProductGridBtns"
import ProductListView from "./ProductListView"
import Filters from "../Filters"

interface ProductListProps {
  productsView: any
  changeView: any
  updateSort: any
  filterProducts: any
  sort: any
}

const ProductList: React.FC<ProductListProps> = ({
  filterProducts,
  sort,
  changeView,
  updateSort,
  productsView,
}) => {
  return (
    <ProductListContainer>
      <header className="products-header">
        <h1>All Products</h1>
        <p>
          Two collections, no competition. Shop all of the comfortable,
          customizable sofas, sectionals and armchairs in our Nomad and Range
          Collections, plus fast, free shipping on your order.
        </p>
      </header>
      <div className="product-container">
        <Filters />

        <section>
          <ProductGridBtns
            products={filterProducts}
            updateSort={updateSort}
            sort={sort}
            handleProductView={changeView}
            view={productsView}
          />

          {filterProducts.length < 1 ? (
            <NotFoundH1>Sorry, no products matched your search.</NotFoundH1>
          ) : productsView === "grid" ? (
            <ProductGridView products={filterProducts} />
          ) : (
            <ProductListView products={filterProducts} />
          )}
        </section>
      </div>
    </ProductListContainer>
  )
}

export default ProductList
