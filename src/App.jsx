import * as React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@assets/styles/globalStyles';
import theme from '@assets/styles/theme';

import { Layout } from '@components/layout/Layout';

import { Home } from '@views/home';
import { homeSelector } from '@views/home/vm';

import { PAGE_TYPE } from './consts';

function App() {
  const inputRef = React.useRef(null);
  const { pageType } = useSelector(homeSelector);

  const onCreate = () => {
    const count = Number(inputRef.current?.value || 0);
    window.parent.postMessage(
      { pluginMessage: { type: 'create-rectangles', count } },
      '*'
    );
  };

  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  const renderBody = () => {
    switch (pageType) {
      case PAGE_TYPE.MAIN:
      default: {
        return <Home />;
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{renderBody()}</Layout>
    </ThemeProvider>
  );
}

export default App;
