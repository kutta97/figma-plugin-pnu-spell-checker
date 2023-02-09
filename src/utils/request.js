const request = () => {
  let abortController = new AbortController();
  return {
    abort: () => {
      abortController.abort();
      abortController = new AbortController();
    },
    celar: () => {
      abortController = null;
    },
    promise: async (callback) => {
      const { signal } = abortController;
      return new Promise((resolve, reject) => {
        if (abortController.aborted) {
          reject(new Error('aborted'));
        }

        callback().then(() => {
          resolve();
        });

        signal.addEventListener('abort', () => {
          reject(new Error('abort'));
        });
      });
    },
    fetch: async (url) => {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        return response.json();
      } catch (e) {
        const { name, status, message } = e;
        if (name === 'AbortError') {
          console.log('Cancel fetch');
          return e;
        }
        return e;
      }
    },
  };
};

export default request();
