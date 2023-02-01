/**
 * services directory is call API
 * @returns {{getApi: (function(): Promise<unknown>)}}
 * @constructor
 */
export const HomeService = () => {
  const domain = '/home'; // TODO connect with base url (for Figma API)

  return {
    getApi: async () => {
      const data = await (() => domain); // call API
      return new Promise((resolve) => {
        resolve(data);
      });
    },
  };
};
