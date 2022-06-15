import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8rem;

  //Mobile
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 4rem;
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    margin-top: 4rem;
  }

  // large Screen
  @media screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

export const Img = styled.div`
  width: 35vw;

  img {
    width: 25rem;
    height: 30rem;
  }

  //Mobile
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    img {
      width: 15rem;
      height: 15rem;
    }
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    img {
      width: 50vw;
      height: 20rem;
    }
  }
`;

export const Aboutme = styled.div`
  position: relative;
  width: 35vw;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    font-size: 2.6em;
    color: #fff;
    font-weight: bolder;
    text-align: center;
  }

  p {
    color: #fff;
    font-size: 1.2em;
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;
    text-decoration: none;
    font-size: 1.6em;
    background-color: ${(props) => props.theme.colors.primaryMain};
    padding: 0.2em;
    border-radius: 0.3em;
    text-align: center;
    color: #fff;
    transition: 800ms;

    :hover {
      background-color: ${(props) => props.theme.colors.primaryBolder};
      border: 1px solid #fff;
    }

    @media screen and (max-width: 767px) {
      right: 20px;
    }
  }

  //Mobile
  @media screen and (max-width: 767px) {
    width: 100vw;

    div {
      padding-bottom: 3rem;
      width: 90vw;
      margin: auto;
      gap: 0.8em;
    }
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;

    div {
      padding-bottom: 3rem;
      width: 90vw;
      margin: auto;
      gap: 0.8em;
    }
  }
`;

/*

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  //Mobile
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 4rem;
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    margin-top: 4rem;
  }
`;

export const Img = styled.div`
  width: 35vw;

  img {
    width: 25rem;
    height: 30rem;
  }

  //Mobile
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    img {
      width: 15rem;
      height: 15rem;
    }
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    img {
      width: 50vw;
      height: 20rem;
    }
  }
`;

export const Aboutme = styled.div`
  position: relative;
  width: 35vw;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    font-size: 2.6em;
    color: #fff;
    font-weight: bolder;
    text-align: center;
  }

  p {
    color: #fff;
    font-size: 1.2em;
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;
    text-decoration: none;
    font-size: 1.6em;
    background-color: ${(props) => props.theme.colors.primaryMain};
    padding: 0.2em;
    border-radius: 0.3em;
    text-align: center;
    color: #fff;
    transition: 800ms;

    :hover {
      background-color: ${(props) => props.theme.colors.primaryBolder};
      border: 1px solid #fff;
    }

    @media screen and (max-width: 767px) {
      right: 20px;
    }
  }

  //Mobile
  @media screen and (max-width: 767px) {
    width: 100vw;

    div {
      padding-bottom: 3rem;
      width: 90vw;
      margin: auto;
      gap: 0.8em;
    }
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;

    div {
      padding-bottom: 3rem;
      width: 90vw;
      margin: auto;
      gap: 0.8em;
    }
  }
`;

*/
