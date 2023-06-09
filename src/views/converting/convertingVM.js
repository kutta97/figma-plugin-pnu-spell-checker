import { CONVERSION_RESULT_STATUS, PAGE_TYPE } from '@consts/index';

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

      console.log('conversion result');
      console.log('status', status);
      console.log('msg', msg);

      switch (status) {
        case CONVERSION_RESULT_STATUS.ERROR: {
          console.log('show toast msg', msg);
          dispatch(showToast(msg));
          dispatch(pageClear());
          break;
        }
        case CONVERSION_RESULT_STATUS.SUCCESS: {
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
