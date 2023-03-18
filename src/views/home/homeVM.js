import { useEffect, useMemo } from 'react';

import { fromMessage } from '@utils/messages';

import { searchListenerConnect } from '@store/home';
import { homeFilterSelector } from '@store/home/selector';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { setSelectedNodes, totalSelectedNodeCountSelector } from '@store/node';

export const useHomeVM = () => {
  const dispatch = useAppDispatch();
  const filtered = useAppSelector(homeFilterSelector);
  const totalSelectedNodeCount = useAppSelector(totalSelectedNodeCountSelector);

  const getSelectedNodes = async (e) => {
    try {
      const data = await fromMessage(e);
      if (data.pluginMessage.query !== 'selectionchange') return;
      dispatch(setSelectedNodes(data.pluginMessage.selectedNodesWithText));
    } catch (error) {
      console.error(e);
    }
  };

  useEffect(() => {
    window.addEventListener('message', getSelectedNodes);
    return () => {
      window.removeEventListener('message', getSelectedNodes);
    };
  });

  const isCheckAvailable = useMemo(() => {
    return totalSelectedNodeCount > 0;
  }, [totalSelectedNodeCount]);

  const check = () => {
    dispatch(searchListenerConnect());
  };

  return {
    filtered,
    isCheckAvailable,
    check,
  };
};
