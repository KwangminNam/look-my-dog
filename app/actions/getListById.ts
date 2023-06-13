import prisma from '@/app/libs/prismadb';

interface IParams{
  listingId?:string;
}

export default async function getListById(params:IParams){
  try{
    const {listingId} = params;
    console.log(listingId);
    const listItems = await prisma.dogListing.findUnique({
      where:{
        id:listingId
      },
      include:{
        user:true,
      }
    })

    if(!listItems) return null;

    return {
      ...listItems,
      createdAt: listItems.createdAt.toISOString(),
      user:{
        ...listItems.user,
        createdAt: listItems.user.createdAt.toISOString(),
        updatedAt: listItems.user.updatedAt.toISOString(),
        emailVerified:
        listItems.user.emailVerified?.toISOString() || null,
      }

    }

  }
  catch(error:any){

  }
}