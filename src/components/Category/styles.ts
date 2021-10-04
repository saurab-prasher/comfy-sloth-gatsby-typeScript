import styled from "styled-components"

export const CategoryContainer = styled.section`
  max-width: 124rem;
  padding: 9.6rem 3.2rem;
  margin: 0 auto;

  .category-heading {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
    text-transform: capitalize;
    display: inline-block;
    letter-spacing: -0.75px;
  }

  .category-description {
    font-size: 1.4rem;
    line-height: 1.7;
  }
  .category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2.4rem;
  }

  .category-text {
    margin-bottom: 4.8rem;
  }
`
