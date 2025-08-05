import { create } from 'zustand';

const useIframeStore = create((set) => {
  const initialLoginState = false;

  return {
    isOpen: initialLoginState,
    setIsOpen: (state) => set({ isOpen: state }),
    openIframe: () => set({ isOpen: true }),
    closeIframe: () => set({ isOpen: false }),
  };
});

export default useIframeStore;
