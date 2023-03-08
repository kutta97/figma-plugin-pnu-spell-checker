export function fromMessage(e) {
  // TODO origin check
  return Promise.resolve(e.data);
}

export async function asyncMessage(query) {
  return new Promise((resolve, reject) => {
    const getMessage = async (e) => {
      const data = await fromMessage(e);
      if (data?.pluginMessage?.query !== query) {
        reject(new Error('Wrong query'));
      }
      resolve(data);
      window.removeEventListener('message', getMessage);
    };
    window.addEventListener('message', getMessage);
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, 5000);
  });
}
