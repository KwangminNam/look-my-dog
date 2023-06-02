import { create } from "zustand";

interface LoginModal {
  isOpen: boolean;
  actionOpen: () => void;
  actionClose: () => void;
}

const useLoginModal = create<LoginModal>((set) => ({
  isOpen: false,
  actionOpen: () => set({ isOpen: true }),
  actionClose: () => set({ isOpen: false }),
}))

export default useLoginModal;