import React from "react"
import Cards from "../Card"

import { CategoryContainer } from "./styles"

interface CategoryPageProps {
  categories: any
  category: string
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  categories,
  category,
}) => {
  return (
    <CategoryContainer className="category-container">
      <div className="category-text">
        <h1 className="category-heading">{category} Furnitures</h1>

        <p className="category-description">
          Discover our selection of furniture. For all tastes and budgets, you
          will find sofas, loveseats, armchairs, sectionals and modulars,
          futons, coffee tables, accent tables, TV and audio furniture, and
          bookcases for all styles of living area! Also to discover, a selection
          of console tables and nesting tables for the most demanding of you. At
          ComfySloth, we know that the is the central room of your home in{" "}
          {category} sofar as it is both a place of relaxation and conviviality.
          Our main goal is therefore to allow you to furnish this room by making
          it both comfortable and functional on a daily basis.
        </p>
      </div>
      <div className="category">
        {categories.map((item: any) => {
          const { id, name, image } = item
          return <Cards key={id} id={id} name={name} image={image} />
        })}
      </div>
    </CategoryContainer>
  )
}

export default CategoryPage
