import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PAGE_TITLE, PAGE_TYPE } from '@consts/index';

import { useAppDispatch } from '@store/hook';
import { showModal } from '@store/modal';
import { rootSelector } from '@store/root';

import { usePageRouter } from '@hooks/usePageRouter';

export const useNavbarVM = () => {
  const dispatch = useAppDispatch();
  const { pageType } = useSelector(rootSelector);
  // TODO get count of result

  const { prev } = usePageRouter();

  const handleInfoClick = () => {
    dispatch(showModal('INFO_MODAL'));
  };

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
    return pageType === PAGE_TYPE.HOME;
  }, [pageType]);

  return {
    pageType,
    pageTitle,
    isVisibleBackButton,
    isVisibleLeftButton,
    isVisibleRightButton,
    handlePrevClick: prev,
    handleInfoClick,
  };
};
