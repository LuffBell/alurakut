import styled from "styled-components"

export const ComunnityGrid = styled.section`
  width: 100%;
  max-width: 500px;
  
  grid-gap: 10px;

  padding: 1rem;
     
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 860px) {
    display: grid;
   
    max-width: 1100px;
   
    grid-template-areas: "profileArea comunnityArea";
    grid-template-columns: 160px 1fr;
  }

`
