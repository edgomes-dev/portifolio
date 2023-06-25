import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, rgba(25, 88, 24, 0.95) 0%, rgba(17, 18, 17, 0.95) 95%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;

    ul {
      display: flex;
      flex-direction: column;
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
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `}
`;
