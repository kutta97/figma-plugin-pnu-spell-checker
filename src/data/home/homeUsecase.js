/**
 * usecase is data transfer api to model
 * @param data
 * @returns {{getHomeData: (function(): Promise<{transferData: *}>)}}
 * @constructor
 */
export const HomeUsecase = (api) => {
  return {
    getSpellCheck: async (spell) => {
      return Promise.resolve({
        transferData: await (await api(spell)).json(),
      });
    },
  };
};
