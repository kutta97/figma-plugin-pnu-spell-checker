import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './ui.css';

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
    <main>
      <header>
        <h2>Rectangle Creator</h2>
      </header>
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
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
