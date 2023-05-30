import { useEffect, useMemo, useState } from 'react';

import { fromMessage } from '@utils/messages';

import { checkListenerConnect } from '@store/home';
import { useAppDispatch, useAppSelector } from '@store/hook';
import {
  selectedNodeSelector,
  setSelectedNodes,
  totalSelectedNodeCountSelector,
} from '@store/node';

export const useHomeVM = () => {
  const dispatch = useAppDispatch();
  const totalSelectedNodeCount = useAppSelector(totalSelectedNodeCountSelector);
  const selectedNode = useAppSelector(selectedNodeSelector);

  const [isCheckAvailable, setIsCheckAvailable] = useState(false);

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

  useEffect(() => {
    setIsCheckAvailable(
      totalSelectedNodeCount === 1 && selectedNode?.type === 'TEXT'
    );
  }, [totalSelectedNodeCount, selectedNode]);

  const check = () => {
    dispatch(checkListenerConnect());
  };

  return {
    isCheckAvailable,
    check,
  };
};
