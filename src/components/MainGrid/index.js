import styled from "styled-components"

export const MainGrid = styled.main`
  width: 100%;
  max-width: 500px;
  
  grid-gap: 10px;

  padding: 1rem;
     
  margin-left: auto;
  margin-right: auto;

  .profileArea {
      display: none;

      @media(min-width: 860px) {
          display: block;
      }
  }

  @media (min-width: 860px) {
    display: grid;
   
    max-width: 1100px;
   
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`