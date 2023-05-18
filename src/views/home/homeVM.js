import { useEffect, useMemo } from 'react';

import { fromMessage } from '@utils/messages';

import { checkListenerConnect } from '@store/home';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { setSelectedNodes, totalSelectedNodeCountSelector } from '@store/node';

export const useHomeVM = () => {
  const dispatch = useAppDispatch();
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
    dispatch(checkListenerConnect());
  };

  return {
    isCheckAvailable,
    check,
  };
};
