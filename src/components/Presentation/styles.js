import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-top: 7.8rem;

  p {
    font-size: 2.6em;
    color: #fff;
  }

  span {
    font-size: 4.6em;
    color: #fff;
    font-weight: bolder;
  }

  .subtitle {
    color: gray;
  }

  .btn {
    text-decoration: none;
    font-size: 1.6em;
    background-color: ${(props) => props.theme.colors.primaryMain};
    padding: 0.2em;
    border-radius: 0.3em;
    width: 50%;
    text-align: center;
    margin-top: 0.5em;
    color: #fff;
    transition: 800ms;

    :hover {
      background-color: ${(props) => props.theme.colors.primaryBolder};
      border: 1px solid #fff;
    }
  }

  #gif {
    width: 24rem;
    height: 24rem;
  }

  // Mobile
  @media screen and (max-width: 767px) {
    #gif {
      display: none;
    }

    padding-top: 4rem;
  }

  //Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #gif {
      display: none;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icons = styled.div`
  margin-top: 5px;
  a {
    margin: 3px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;
