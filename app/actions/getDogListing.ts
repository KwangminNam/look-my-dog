import prisma from '@/app/libs/prismadb';

export default async function getListing() {
  try {
    const getDogList = await prisma.dogListing.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    const safeList = getDogList.map((item)=>({
      ...item,
      createdAt:item.createdAt.toISOString(),
    }))

    return safeList;
  } catch (error: any) {
    console.log(error)
  }
}