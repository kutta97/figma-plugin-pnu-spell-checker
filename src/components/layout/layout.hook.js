import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { homeSelector } from '@views/home/vm/selector';

import { BOTTOM_PAGE_TYPE, PAGE_TITLE, PAGE_TYPE } from '../../consts';

export const useNavbarHook = () => {
  const { pageType } = useSelector(homeSelector);
  // TODO get count of result

  const pageTitle = useMemo(() => {
    return PAGE_TITLE[pageType];
  }, [pageType]);

  const isVisibleBackButton = useMemo(() => {
    return pageType !== PAGE_TYPE.MAIN;
  }, [pageType]);

  const bottomPageType = useMemo(() => {
    switch (pageType) {
      case PAGE_TYPE.SEARCHING:
      case PAGE_TYPE.CONVERTING:
      case PAGE_TYPE.DETAIL: {
        return BOTTOM_PAGE_TYPE.HIDDEN;
      }
      case PAGE_TYPE.RESULT: {
        // TODO return go main if result is empty
        return BOTTOM_PAGE_TYPE.CONVERT;
      }
      case PAGE_TYPE.COMPLETE: {
        return BOTTOM_PAGE_TYPE.GO_MAIN;
      }
      default: {
        return BOTTOM_PAGE_TYPE.MAIN;
      }
    }
  }, [pageType]);

  return { pageType, pageTitle, bottomPageType, isVisibleBackButton };
};
