import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    width: 80%;
    height: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    img {
      width: 100%;
    }
  }
`;
