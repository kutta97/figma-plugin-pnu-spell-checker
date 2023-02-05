import * as React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { rootSelector } from '@store/root';

import GlobalStyle from '@assets/styles/globalStyles';
import theme from '@assets/styles/theme';

import { Detail } from '@views/detail';
import { Home } from '@views/home';
import { Result } from '@views/result';

import { PAGE_TYPE } from './consts';
import { Layout } from './fragments/layout/Layout';

function App() {
  const inputRef = React.useRef(null);
  const { pageType } = useSelector(rootSelector);

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
      case PAGE_TYPE.DETAIL: {
        return <Detail />;
      }
      case PAGE_TYPE.RESULT: {
        return <Result />;
      }
      case PAGE_TYPE.HOME:
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
