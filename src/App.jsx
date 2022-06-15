import { GlobalStyle, Theme } from './global';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';

import { HomePage } from './pages/homepage';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <HomePage />
      </ThemeProvider>
      <GlobalStyle />
    </Provider>
  );
};

export default App;
