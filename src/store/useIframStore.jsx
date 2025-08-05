// useIframeStore.js - 정확한 구현
import { create } from 'zustand';

const useIframeStore = create((set) => ({
  isOpen: false,
  currentUrl: '',
  openIframe: (url) => {
    console.log('Opening iframe with URL:', url); // 디버깅용
    set({ isOpen: true, currentUrl: url });
  },
  closeIframe: () => set({ isOpen: false, currentUrl: '' }),
}));

export default useIframeStore;
