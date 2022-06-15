import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => props.visible};
  justify-content: space-around;
  height: 7.8rem;
  width: 100%;
  align-items: center;
  position: fixed;
  background-color: ${(props) => (props.background ? '#0D0D0D' : 'none')};
  transition: all ease 800ms;
  z-index: 2;

  h1 {
    font-family: 'Baskervville', san-serif;
  }

  > svg {
    display: none;
  }

  @media screen and (max-width: 767px) {
    height: 3.5rem;

    > svg {
      display: block;
    }
  }
`;

export const Logo = styled.div`
  font-size: 2.6em;
  padding-left: 0.5em;
  border-left: 4px solid ${(props) => props.theme.colors.primaryMain};
  color: #fff;

  @media screen and (max-width: 767px) {
    font-size: 1.3em;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 0.8em;
    list-style: none;

    li {
      font-size: 1.5em;

      a {
        text-decoration: none;
        color: #fff;
        transition: all ease 600ms;

        :hover {
          color: ${(props) => props.theme.colors.primaryMain};
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
