import homeListeners from '@store/home/listener';
import resultListeners from '@store/result/listener';
import rootListeners from '@store/root/listener';

export const listeners = [
  ...rootListeners,
  ...homeListeners,
  ...resultListeners,
];
