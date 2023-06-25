import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  margin: 8rem auto;
  background-color: #202024;
  padding: 10px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2em;
    text-align: center;
    color: #fff;
    font-weight: bolder;
    margin-bottom: 8px;
  }

  form {
    width: 80%;
    margin: 0 auto;
  }

  // Mobile
  @media screen and (max-width: 767px) {
    width: 95vw;
    margin: 3rem auto;
  }

  // Tablet or Laptop
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80vw;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;

  label {
    font-size: 1.3em;
    color: #fff;
  }

  input {
    background-color: #131313;
    border: none;
    padding: 1em;
    border-radius: 4px;
    margin-bottom: 8px;
    color: #fff;

    :focus {
      border: 1px solid #fff;
    }
  }

  textarea {
    background-color: #131313;
    border: none;
    border-radius: 4px;
    color: #fff;

    :focus {
      border: 1px solid #fff;
    }
  }
`;

export const Error = styled.div`
  margin-top: 8px;
  text-align: center;
  background-color: #ed2939;
  border-radius: 5px;
  font-size: 1.1em;
  color: #fff;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;

  .btn {
    margin: 8px auto;
    font-size: 1.2em;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.primaryMain};
    padding: 0.3rem 1.6rem;
    border: none;
    border-radius: 0.3em;
    color: #fff;
    transition: 800ms;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.primaryBolder};
    }
  }
`;
