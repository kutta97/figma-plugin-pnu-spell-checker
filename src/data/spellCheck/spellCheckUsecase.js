/**
 * usecase is data transfer api to model
 * @returns {{getHomeData: (function(): Promise<{transferData: *}>)}}
 * @constructor
 * @param api
 */
export const SpellCheckUsecase = (api) => {
  return {
    getSpellCheck: async (originalText) => {
      const response = await api(originalText);
      const data = await response.json();

      return data.errors
        .filter((error) => error.recommend.length === 1)
        .map((error, index) => {
          return {
            id: index,
            data: {
              beforeText: error.checking.text,
              afterText: error.recommend[0],
              help: error.errorExplanation.replaceAll('<br/>', '\n'),
            },
          };
        });
    },
  };
};
