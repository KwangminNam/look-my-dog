import { create } from 'zustand';

interface SearchModalStore {
  isOpen: boolean;
  actionOpen: () => void;
  actionClose: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  actionOpen: () => set({ isOpen: true }),
  actionClose: () => set({ isOpen: false })
}));

export default useSearchModal;