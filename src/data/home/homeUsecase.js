/**
 * usecase is data transfer api to model
 * @param data
 * @returns {{getHomeData: (function(): Promise<{transferData: *}>)}}
 * @constructor
 */
export const HomeUsecase = (data) => {
  return {
    getHomeData: async () => {
      const value = await data;
      return { transferData: value };
    },
  };
};
