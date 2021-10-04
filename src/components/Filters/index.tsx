import React from "react"
import { FilterContainer, FilterClear } from "./FiltersElements"

import FilterForm from "./FilterForm"
import FilterCategory from "./FilterCategory"
import FilterCompany from "./FilterCompany"
import FilterColors from "./FilterColors"
import FilterPrice from "./FilterPrice"
import FilterShipping from "./FilterShipping"

import { useSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

const Filters: React.FC = () => {
  const { filters } = useSelector(state => state.filter)
  //! Needs improvement
  const { settingFilters, resetFilters } = useActions()

  return (
    <FilterContainer>
      <FilterForm
        handleFilters={settingFilters}
        searchTerm={filters.searchTerm}
      />

      <FilterCategory
        filterCategory={filters.category}
        handleFilters={settingFilters}
      />
      <FilterCompany
        filterCompany={filters.company}
        handleFilters={settingFilters}
      />
      <FilterColors
        filterColor={filters.color}
        handleFilters={settingFilters}
      />

      <FilterPrice
        maxPrice={filters.maxPrice}
        minPrice={filters.minPrice}
        price={filters.price}
        handleFilters={settingFilters}
      />

      <FilterShipping
        handleFilters={settingFilters}
        freeshipping={filters.freeshipping}
      />

      <FilterClear>
        <button className="btn btn--secondary" onClick={() => resetFilters()}>
          Clear Filters
        </button>
      </FilterClear>
    </FilterContainer>
  )
}

export default Filters
