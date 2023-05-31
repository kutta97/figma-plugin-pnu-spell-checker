import { useEffect, useState } from 'react';

import { fromMessage } from '@utils/messages';

import { checkListenerConnect } from '@store/home';
import { useAppDispatch, useAppSelector } from '@store/hook';
import {
  selectedNodeSelector,
  setSelectedNodes,
  totalSelectedNodeCountSelector,
} from '@store/node';
import { hideToast, showToast } from '@store/toast';

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
      const nodeCount = data.pluginMessage.selectedNodesWithText?.length;
      const nodeType = data.pluginMessage.selectedNodesWithText[0]?.type;
      const checkAvailable = nodeCount === 1 && nodeType === 'TEXT';
      if (!checkAvailable) {
        dispatch(showToast('1개의 텍스트 레이어를 선택해 주세요'));
      }
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
    const value = totalSelectedNodeCount === 1 && selectedNode?.type === 'TEXT';
    if (value) dispatch(hideToast());
    setIsCheckAvailable(value);
  }, [dispatch, totalSelectedNodeCount, selectedNode]);

  const check = () => {
    dispatch(checkListenerConnect());
  };

  return {
    isCheckAvailable,
    check,
  };
};
