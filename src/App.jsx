import { GlobalStyle, Theme } from './global';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './pages/homepage';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HomePage />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
