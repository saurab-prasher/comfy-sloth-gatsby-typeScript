import React from "react"
import { IMAGES } from "Images"

import { ValueContainer, TruckIcon, SofaIcon, TreeIcon } from "./styles"

const Index: React.FC = () => {
  return (
    <ValueContainer>
      <div className="value-inner">
        <div className="values">
          <TruckIcon src={IMAGES.truckIcon.default} className="value-icons" />

          <div className="text">
            <p className="values-heading">Fast &amp; free shipping</p>

            <p className="values-description">
              Every single order ships for free. No minimums, no tiers, no fine
              print whatsoever.
            </p>
          </div>
        </div>
        <div className="values">
          <SofaIcon src={IMAGES.sofaIcon.default} className="value-icons" />

          <div className="text">
            <p className="values-heading"> Modular, easy-to-move design</p>

            <p className="values-description">
              Our innovative modular design is driven by the belief that
              furniture should fit this home, and the next one.
            </p>
          </div>
        </div>
        <div className="values">
          <TreeIcon src={IMAGES.treeIcon.default} className="value-icons" />
          <div className="text">
            <p className="values-heading">Durable, premium materials</p>

            <p className="values-description">
              We use materials like sustainably-forested wood, strengthened
              steel hardware, and top-grain Italian leather.
            </p>
          </div>
        </div>
      </div>
    </ValueContainer>
  )
}

export default Index
