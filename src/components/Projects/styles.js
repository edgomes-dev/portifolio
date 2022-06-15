import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  color: #fff;

  h2 {
    font-size: 2.4em;
    text-align: center;
    margin-bottom: 2em;
  }

  @media screen and (max-width: 767px) {
    margin-top: 3rem;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1000px;
  margin: auto;
  column-gap: 35px;
  row-gap: 30px;

  @media screen and (max-width: 1000px) {
    row-gap: 20px;
    column-gap: 10px;
    margin: none;
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  background-color: #202024;
  padding: 1.5em;
  font-size: 0.9em;

  img {
    width: 100%;
    height: 15rem;
    object-fit: contain;
  }

  h3 {
    font-size: 1.5em;
  }

  ul {
    margin-left: 1.6em;
  }

  @media screen and (max-width: 1000px) {
    margin: 0 10px;
    font-size: 1.2em;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 2px;
    padding: 0.7em;
  }

  .github {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primaryMain};
    border-radius: 10px;
    transition: 800ms;

    :hover {
      background-color: ${(props) => props.theme.colors.primaryBolder};
    }
  }

  .site {
    border: 1px solid blue;
    color: blue;
    border-radius: 10px;
    transition: 800ms;

    :hover {
      background-color: blue;
      color: #fff;
    }
  }
`;

/*

export const Container = styled.div`
  h2 {
    text-align: center;
    font-family: 'Baskervville', san-serif;
  }

  a {
    margin-top: 5px;
    text-decoration: none;
    background-color: #7cafc4;
    color: #fff;
    font-size: 12pt;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #add8e6;
    }
  }

  .button {
    display: flex;
    justify-content: center;
  }
`;

export const ProjectsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ProjectsAreaItem = styled.div`
  display: flex;

  img {
    width: 487px;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  div {
    h3 {
      margin-top: 0px;
      margin-left: 10px;
    }

    p {
      margin: 5px 10px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 250px;
    }

    div {
      h3 {
        text-align: center;
        margin-top: 10px;
      }
    }
  }
`;

export const ItemText = styled.div``;

export const ItemButton = styled.div`
  justify-content: flex-end;
  display: flex;
  gap: 3px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

*/
