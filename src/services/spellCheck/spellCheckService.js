/**
 * services directory is call API
 * @returns {{getApi: (function(): Promise<unknown>)}}
 * @constructor
 */
export const SpellCheckService = () => {
  const BASE_URL = process.env.API_SERVER;
  const API_TOKEN = process.env.TOKEN;

  return {
    getSpellCheck: async (spell) => {
      return fetch(`${BASE_URL}/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          text: spell,
          token: API_TOKEN,
        }),
      });
    },
  };
};
