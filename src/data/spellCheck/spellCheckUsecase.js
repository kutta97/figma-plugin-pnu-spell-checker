/**
 * usecase is data transfer api to model
 * @returns {{getHomeData: (function(): Promise<{transferData: *}>)}}
 * @constructor
 * @param api
 */
export const SpellCheckUsecase = (api) => {
  return {
    getSpellCheck: async (spell) => {
      return Promise.resolve({
        transferData: await (await api(spell)).json(),
      });
    },
  };
};
