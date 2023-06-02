/**
 * usecase is data transfer api to model
 * @returns {{getHomeData: (function(): Promise<{transferData: *}>)}}
 * @constructor
 * @param api
 */

const getResultDataObj = (error) => {
  return {
    beforeText: error.checking.text,
    afterText: error.recommend[0],
    help: error.errorExplanation.replaceAll('<br/>', '\n'),
  };
};

const getResult = (data) => {
  return data.errors.reduce(
    (obj, error, index) => {
      if (error.recommend.length === 1) {
        obj.results.push({
          id: index,
          index: {
            startIndex: error.checking.startIndex,
            deleteCount: error.checking.text.length,
          },
          data: getResultDataObj(error),
        });
      }
      if (error.recommend.length > 1) {
        obj.resultsWithMultipleRecommends.push({
          id: index,
          data: getResultDataObj(error),
        });
      }
      return obj;
    },
    {
      results: [],
      resultsWithMultipleRecommends: [],
    }
  );
};

export const SpellCheckUsecase = (api) => {
  return {
    getSpellCheck: async (originalText) => {
      try {
        const response = await api(originalText);
        const data = await response.json();

        return getResult(data);
      } catch (e) {
        console.error(e);
      }
      return null;
    },
  };
};
