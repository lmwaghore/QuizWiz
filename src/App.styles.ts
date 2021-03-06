import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-size: cover;
    background-image: linear-gradient(180deg, #11f,
      #87f1ff);
    margin: 0;
    padding: 0, 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizing: border-box;
    font-family: Palatino;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Palatino;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shawdow(2px 2px #0085a3);
    font-size: 500%;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .specSelector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .start, .next {
    font-size: 21px;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc11);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    padding: 0 5%;
    margin: 5%;
  }

  .start{
    max-width: 200px;
  }




`