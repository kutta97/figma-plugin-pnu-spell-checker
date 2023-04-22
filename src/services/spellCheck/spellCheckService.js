/**
 * services directory is call API
 * @returns {{getApi: (function(): Promise<unknown>)}}
 * @constructor
 */
export const SpellCheckService = () => {
  const domain = 'http://localhost:8000/spellcheck/'; // TODO connect with base url (for Figma API)

  return {
    getSpellCheck: async (spell) => {
      return fetch(`${domain}${spell}`); // call API
    },
  };
};
