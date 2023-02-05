import homeListeners from '@store/home/listener';
import rootListeners from '@store/root/listener';

export const listeners = [...rootListeners, ...homeListeners];
