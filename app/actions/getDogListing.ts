import prisma from '@/app/libs/prismadb';

export default async function getListing() {
  try {
    const getDogList = await prisma.dogListing.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return getDogList;
  } catch (error: any) {
    console.log(error)
  }
}