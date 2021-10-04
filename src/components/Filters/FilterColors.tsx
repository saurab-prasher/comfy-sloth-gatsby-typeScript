import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getUniqueValues } from "../../utils/helper"
import { Colors, FilterColorBtn, SpanBtnAll } from "./FiltersElements"
import { FaCheck } from "react-icons/fa"

interface FilterColorProps {
  handleFilters: any
  filterColor: any
}

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          colors
        }
      }
    }
  }
`

const FilterColors: React.FC<FilterColorProps> = ({
  handleFilters,
  filterColor,
}) => {
  const {
    allProducts: { edges: node },
  } = useStaticQuery(query)
  const colors = node.map((item: any) => item.node)
  const uniqueColors = getUniqueValues(colors, "colors")

  return (
    <Colors className="color">
      <h3>Colors</h3>
      <div>
        {uniqueColors?.map((color: string, idx: number) =>
          color === "all" ? (
            <SpanBtnAll
              onClick={e => handleFilters(e)}
              data-color={color}
              key={idx}
              name="color"
              className={`${filterColor === "all" ? "active-filter" : null}`}
            >
              {color}
            </SpanBtnAll>
          ) : (
            <FilterColorBtn
              key={idx}
              name="color"
              background={color}
              data-color={color}
              className={`${filterColor === color ? "active-btn" : null}`}
              onClick={e => handleFilters(e, "colors")}
            >
              {filterColor === color && <FaCheck />}
            </FilterColorBtn>
          )
        )}
      </div>
    </Colors>
  )
}

export default FilterColors
