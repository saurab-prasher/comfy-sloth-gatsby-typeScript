import React from "react"

import { ColorContainer } from "./AddToCartElements"
import ColorBtn from "./ColorBtn"

interface ColorsContainerProps {
  colors: string[]
  handleMainColor: (handleMainColor: string) => void
  mainColor: string
}

const ColorsContainer: React.FC<ColorsContainerProps> = ({
  colors,
  handleMainColor,
  mainColor,
}) => {
  return (
    <ColorContainer>
      <p> Colors: </p>

      <div className="colors-btn-container">
        {colors.map((color: string, index: number) => {
          return (
            <ColorBtn
              key={index}
              color={color}
              handleMainColor={handleMainColor}
              mainColor={mainColor}
            />
          )
        })}
      </div>
    </ColorContainer>
  )
}

export default ColorsContainer
