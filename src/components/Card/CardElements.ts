import styled from "styled-components"

export const Card = styled.div`
  position: relative;
`

export const CardImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }
`

export const CardImage = styled.img`
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: 30rem;
  object-fit: cover;
`
export const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
`
export const Heading = styled.h3`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #333;
  background-color: #e5d7cd;
  padding: 0.8rem;
`
