import prisma from '@/app/libs/prismadb';
import getLoggedInUser from './getLoginedUser';
import getListing from './getDogListing';

export default async function getFavorite() {
  try {

    const currentUser = await getLoggedInUser();
    if (!currentUser) {
      return [];
    }

    const favoriteList = await prisma.dogListing.findMany({
      where: {
        id: {
          in: [
            ...(currentUser.favoriteIds || [])
          ]
        }
      }
    })
    const safeFavorites = favoriteList.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString()
    }))
    return safeFavorites;
  }catch(error:any){
    throw new Error(error);
  }
}