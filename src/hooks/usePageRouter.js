import { useAppDispatch } from '@store/hook';
import { nextPage, pageClear, prevPage } from '@store/root';

import request from '../utils/request';

export const usePageRouter = () => {
  const dispatch = useAppDispatch();

  const next = (page, isNotRecord = false) => {
    dispatch(
      nextPage({
        page,
        isNotRecord,
      })
    );
  };

  const prev = () => {
    request.abort();
    dispatch(prevPage());
  };

  const clear = () => {
    dispatch(pageClear());
  };

  return { next, prev, clear };
};
