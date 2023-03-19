import { PAGE_TYPE } from '@consts';
import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import request from '@utils/request';

import { rootSelector } from '@store/root';

import GlobalStyle from '@assets/styles/globalStyles';
import theme from '@assets/styles/theme';

import { Layout } from '@fragments/layout/Layout';

import { Checking } from '@views/checking';
import { Complete } from '@views/complete';
import { Converting } from '@views/converting';
import { Detail } from '@views/detail';
import { Home } from '@views/home';
import { Result } from '@views/result';

function App() {
  const inputRef = React.useRef(null);
  const { pageType } = useSelector(rootSelector);

  const onClose = () => {
    window.parent.postMessage({ pluginMessage: { type: 'exit' } }, '*');
  };

  useEffect(() => {
    return () => request.clear();
  }, []);

  const renderBody = () => {
    switch (pageType) {
      case PAGE_TYPE.DETAIL: {
        return <Detail />;
      }
      case PAGE_TYPE.CHECKING: {
        return <Checking />;
      }
      case PAGE_TYPE.RESULT: {
        return <Result />;
      }
      case PAGE_TYPE.CONVERTING: {
        return <Converting />;
      }
      case PAGE_TYPE.COMPLETE: {
        return <Complete />;
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
