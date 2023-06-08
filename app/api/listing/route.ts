import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getLoggedInUser from '../../actions/getLoginedUser'


export async function POST(req: Request) {
  const loggedinUser = await getLoggedInUser();

  if (!loggedinUser) {
    return NextResponse.error()
  }

  const body = await req.json();
  const {
    dogType,
    dogAge,
    male,
    imageSrc,
    personality,
    dogMonth,
    dogName,
    weight,
    desc,
  } = body;

  Object.keys(body).forEach((item) => {
    if (!body[item]) {
      NextResponse.error()
    }
  })

  console.log(body)

  const listing = await prisma.dogListing.create({
    data: {
      dogType,
      dogAge,
      male,
      imageSrc,
      personality,
      dogMonth:dogMonth.month,
      dogName,
      weight:parseInt(weight,10),
      desc,
      userId: loggedinUser.id
    }
  })
  return NextResponse.json(listing);
}