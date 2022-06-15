import { createGlobalStyle } from 'styled-components';

export const Theme = {
  colors: {
    primaryBold: '#32CD32',
    primaryMain: '#00FF00',
    primaryBolder: '#006400'
  }
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html, #root {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 24px;

        @media screen and (min-width: 768px) {
            font-size: 18px;
        }

        @media screen and (min-width: 1024px) {
            font-size: 16px;
        }
    }

    h1, h2, h3
    {
        font-family: 'Baskervville', serif;
    }

    p, a
    {
        font-family: 'Roboto', sans-serif;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    ::-webkit-scrollbar
    {
    width: 0px;
    background: transparent;
    }
    html {
        scroll-behavior: smooth;
    }
`;
