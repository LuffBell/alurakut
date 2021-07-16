import styled from "styled-components";

const Box = styled.div`
  background: rgb(255,255,255,0.2);

  border-radius: 8px;
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(5px);

  padding: 1rem;

  margin-bottom: 10px;
  .boxLink {  
    font-size: 14px;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    color: #FFFFFF; 
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 20px;
  }
  .buttonVerTodos {
    display: block;
    color: #FFFFFF;
    font-weight: bold;
    margin-top: 2rem;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #FFFFFF;
  }
  input {
    width: 100%;
    border: 0;
    color: #FFFFFF;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    background-color: rgb(0,0,0,0.5);
    ::placeholder {
      color: rgb(255,255,255,0.6);
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #FFFFFF40;
  }
`

export default Box;