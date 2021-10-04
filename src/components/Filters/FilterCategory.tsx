import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Category } from "./FiltersElements"
import { getUniqueValues } from "../../utils/helper"

interface FilterCategoryProps {
  handleFilters: any
  filterCategory: any
}

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          category
        }
      }
    }
  }
`

const FilterCategory: React.FC<FilterCategoryProps> = ({
  handleFilters,
  filterCategory,
}) => {
  const {
    allProducts: { edges: node },
  } = useStaticQuery(query)
  const categories = node.map((item: any) => item.node)
  const uniqueCategories = getUniqueValues(categories, "category")

  return (
    <Category className="category">
      <h3>Category</h3>

      <div>
        {uniqueCategories?.map((category: string, idx: number) => {
          return (
            <button
              onClick={e => handleFilters(e)}
              key={idx}
              name="category"
              className={`${
                filterCategory === category
                  ? "btn--category active-filter"
                  : "btn--category"
              }  `}
            >
              {category}
            </button>
          )
        })}
      </div>
    </Category>
  )
}

export default FilterCategory
