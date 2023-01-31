import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/layout/Layout';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';

function App() {
  const inputRef = React.useRef(null);

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <section>
          <input id="input" type="number" min="0" ref={inputRef} />
          <label htmlFor="input">Rectangle Count</label>
        </section>
        <footer>
          <button type="button" className="brand" onClick={onCreate}>
            Create
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </footer>
      </Layout>
    </ThemeProvider>
  );
}

export default App;