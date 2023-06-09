import { PAGE_TYPE } from '@consts/index';

import { fromMessage } from '@utils/messages';

import { useAppDispatch } from '@store/hook';
import { nextPage, pageClear } from '@store/root';
import { showToast } from '@store/toast';

export const useConvertingVM = () => {
  const dispatch = useAppDispatch();

  const processConversionResult = async (e) => {
    try {
      const data = await fromMessage(e);
      if (data.pluginMessage.query !== 'conversionresult') return;
      const { status, msg } = data.pluginMessage.result;

      switch (status) {
        case 'ERROR': {
          dispatch(showToast(msg));
          dispatch(pageClear());
          break;
        }
        case 'SUCCESS': {
          dispatch(nextPage({ page: PAGE_TYPE.COMPLETE, isNotRecord: true }));
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.error(e);
    }
  };

  return { processConversionResult };
};
