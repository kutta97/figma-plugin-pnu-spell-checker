/**
 * usecase is data transfer api to model
 * @returns {{getHomeData: (function(): Promise<{transferData: *}>)}}
 * @constructor
 * @param api
 */

const getResultDataObj = (error) => {
  return {
    beforeText: error.checking.text,
    afterText: error.recommend,
    help: error.errorExplanation.replaceAll('<br/>', '\n'),
  };
};

const createErrorResult = (error, index) => {
  return {
    id: index,
    data: getResultDataObj(error),
  };
};

const getResult = (data) => {
  return data.errors.reduce(
    (obj, error, index) => {
      const result = createErrorResult(error, index);
      if (error.recommend.length === 1) {
        result.index = {
          startIndex: error.checking.startIndex,
          deleteCount: error.checking.text.length,
        };
        result.data.afterText = error.recommend.at(0);
        obj.results.push(result);
      }
      if (error.recommend.length > 1) {
        result.data.afterText = error.recommend.join(', ');
        obj.resultsWithMultipleRecommends.push(result);
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
