import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #202024;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 8rem;
  color: white;

  h2 {
    text-align: center;
    margin-bottom: 1.25rem;
  }

  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;

export const Content = styled.div`
  padding: 4rem;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 90%;
    padding: 0;
  }
`;
