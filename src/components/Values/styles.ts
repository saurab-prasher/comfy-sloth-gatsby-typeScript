import styled from "styled-components"

export const ValueContainer = styled.section`
  background-color: #f7eee3;

  .value-inner {
    padding: 9.6rem 3.2rem;

    max-width: 130rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));

    justify-items: center;
    align-items: center;
    gap: 6.4rem;

    @media(max-width:56.25em){
      gap: 0;
    }
  }

  .values {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    
    @media(max-width:56.25em){
      
      height: 15rem;
    }
  }
  .value-icons {
    display: flex;
    width: 10rem;
    
    
    @media(max-width:56.25em){
      width: 13rem;
    }
  }

  .values-heading {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.7;
  }
  .values-description {
    font-size: 1.2rem;
    line-height: 1.6;
    letter-spacing: 1px;
  }
`

export const TruckIcon = styled.img``
export const SofaIcon = styled.img``
export const TreeIcon = styled.img``
