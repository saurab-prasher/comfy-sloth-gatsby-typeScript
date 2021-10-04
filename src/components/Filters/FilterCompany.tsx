import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getUniqueValues } from "../../utils/helper"
import { Company } from "./FiltersElements"
interface FilterCompanyProps {
  handleFilters: any
  filterCompany: any
}

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          company
        }
      }
    }
  }
`

const FilterCompany: React.FC<FilterCompanyProps> = ({
  handleFilters,
  filterCompany,
}) => {
  const {
    allProducts: { edges: node },
  } = useStaticQuery(query)
  const company = node.map((item: any) => item.node)
  const uniqueCompany = getUniqueValues(company, "company")

  return (
    <Company className="company">
      <h3>Company</h3>
      <select
        value={filterCompany || ""}
        onChange={e => handleFilters(e)}
        name="company"
        id="company"
      >
        {uniqueCompany?.map((company: string, idx: number) => {
          return (
            <option key={idx} data-name={`${company}`} value={`${company}`}>
              {company}
            </option>
          )
        })}
      </select>
    </Company>
  )
}

export default FilterCompany
