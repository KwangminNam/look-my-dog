import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { SafeUser } from '../types';
import useLoginModal from './useLoginModal';
import { useCallback, useMemo } from 'react';

interface IUseFav {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavortie = ({ listingId, currentUser, }: IUseFav) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFav = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  // const list = currentUser?.favoriteIds || [];

  const toggleFav = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.actionOpen();
    }

    try {
      let request;
      if (hasFav) {
        request = () => axios.delete(`/api/like/${listingId}`)
          .then(() => toast.success('좋아요 취소완료',{icon:'💔'}));
      } else {
        request = () => axios.post(`/api/like/${listingId}`)
          .then(() => toast.success('좋아요!',{icon:'❤️'}));
      }
      await request();
      router.refresh();
    } catch (error) {
      toast.error('에러가 발생하였습니다!');
    }
  }, [currentUser, hasFav, listingId, loginModal, router])

  return {
    hasFav,
    toggleFav
  }
}

export default useFavortie;