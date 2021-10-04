import styled from "styled-components"

export const GalleryContainer = styled.div``

export const GalleryMainImg = styled.img`
  width: 100%;
  display: block;
  height: 50rem;
  object-fit: cover;

  @media (max-width: 48em) {
    height: 40rem;
    width: 75%;
  }
  @media (max-width: 37.5em) {
    height: 28rem;
    width: 100%;
  }
`

export const GalleryCardsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  justify-items: start;
  margin: 0.8rem 0;

  flex-wrap: wrap;
`

export const GalleryCard = styled.div`
  cursor: pointer;
  width: 10rem;
  height: 6rem;
  display: grid;
  overflow: hidden;
`
export const GalleryCardImg = styled.img`
  border: 1px solid transparent;
  width: 100%;
  object-fit: contain;
`
