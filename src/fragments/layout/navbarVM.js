import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PAGE_TITLE, PAGE_TYPE } from '@consts/index';

import { rootSelector } from '@store/root';

import { usePageRouter } from '@hooks/usePageRouter';

export const useNavbarVM = () => {
  const { pageType } = useSelector(rootSelector);
  // TODO get count of result

  const { prev } = usePageRouter();

  const pageTitle = useMemo(() => {
    return PAGE_TITLE[pageType];
  }, [pageType]);

  const isVisibleBackButton = useMemo(() => {
    return pageType !== PAGE_TYPE.HOME;
  }, [pageType]);

  const isVisibleLeftButton = useMemo(() => {
    return pageType !== PAGE_TYPE.COMPLETE;
  }, [pageType]);

  const isVisibleRightButton = useMemo(() => {
    return !isVisibleBackButton;
  }, [isVisibleBackButton]);

  return {
    pageType,
    pageTitle,
    isVisibleBackButton,
    isVisibleLeftButton,
    isVisibleRightButton,
    prev,
  };
};
