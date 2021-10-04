import React from "react"
import { Link } from "gatsby"

import {
  Card,
  CardImage,
  CardText,
  Heading,
  CardImageContainer,
} from "./CardElements"

interface CardsProps {
  id: string
  image: string
  name: string
}

const Cards: React.FC<CardsProps> = ({ id, image, name }) => {
  return (
    <Card>
      <CardImageContainer>
        <Link to={`/product/${id.replace(/\s/g, "-")}`}>
          <CardImage src={image} />
        </Link>
      </CardImageContainer>
      <CardText>{name && <Heading>{name}</Heading>}</CardText>
    </Card>
  )
}

export default Cards
