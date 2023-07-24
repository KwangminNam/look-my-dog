import prisma from '@/app/libs/prismadb';

export interface IListingParmas {
  userId?: string;
  dogAge?: string | number;
  dogName?: string;
  dogType?: string;
  male?: string;
}

export default async function getListing(params: IListingParmas) {
  try {

    const { dogType, dogAge, dogName, male, userId } = params;
    let query: any = {};

    if (dogAge) {
      query.dogAge = Number(dogAge);
    }

    if (userId) {
      query.userId = userId
    }

    if (dogName) query.dogName = decodeURIComponent(dogName);
    if (male) query.male = decodeURIComponent(male);
    if (dogType) query.dogType = decodeURIComponent(dogType);

    const getDogList = await prisma.dogListing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    })

    const safeList = getDogList.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    }))

    return safeList;
  } catch (error: any) {
    console.log(error)
  }
}

