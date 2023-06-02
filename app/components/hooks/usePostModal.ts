import { create } from "zustand";

interface PostModal {
  isOpen: boolean;
  actionOpen: () => void;
  actionClose: () => void;
}

const usePostModal = create<PostModal>((set) => ({
  isOpen: false,
  actionOpen: () => set({ isOpen: true }),
  actionClose: () => set({ isOpen: false }),
}))

export default usePostModal;