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
  background-color: #202024;
  padding: 1.5em;
  display: flex;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }

  .title {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.5em;
      font-weight: bolder;
    }
    span {
      font-size: 1em;
    }

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 0 10px;
    font-size: 1.2em;

    .title {
      p {
        font-size: 2em;
      }
    }
  }
`;

export const Knowledge = styled.div`
  ul {
    margin-top: 0.4em;
    margin-left: 1.6em;
  }
`;
