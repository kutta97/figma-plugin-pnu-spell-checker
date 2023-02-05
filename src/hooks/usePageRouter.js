import { useAppDispatch } from '@store/hook';
import { nextPage, pageClear, prevPage } from '@store/root';

export const usePageRouter = () => {
  const dispatch = useAppDispatch();

  const next = (page) => {
    dispatch(nextPage(page));
  };

  const prev = () => {
    dispatch(prevPage());
  };

  const clear = () => {
    dispatch(pageClear());
  };

  return { next, prev, clear };
};
