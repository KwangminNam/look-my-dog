import { create } from "zustand";

interface RegisterModal {
  isOpen: boolean;
  actionOpen: () => void;
  actionClose: () => void;
}

const useRegisterModal = create<RegisterModal>((set) => ({
  isOpen: false,
  actionOpen: () => set({ isOpen: true }),
  actionClose: () => set({ isOpen: false }),
}))

export default useRegisterModal;