import styled from 'styled-components';

export const Container = styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.primaryMain};
  padding: 3em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AreaLeft = styled.div`
  color: #fff;

  h3 {
    font-size: 2em;
    font-weight: bolder;
    margin: 0;
    font-family: 'Baskervville', san-serif;

    @media screen and (max-width: 767px) {
      font-size: 1.5em;
    }
  }

  p {
    margin: 0;
  }
`;

export const AreaRight = styled.div`
  a {
    margin: 3px;

    img {
      margin-top: 5px;
      width: 25px;
      height: 25px;
    }
  }
`;
