import { NextResponse } from "next/server";

import getLoggedInUser from "@/app/actions/getLoginedUser";
import prisma from '@/app/libs/prismadb';

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const loggedInuser = await getLoggedInUser();

  if (!loggedInuser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error("error");
  }

  const body = await request.json();

  console.log(body);

  const {
    dogType,
    dogAge,
    male,
    imageSrc,
    personality,
    dogMonth,
    dogName,
    weight,
    desc, } = 
    body;

  const listing = await prisma.dogListing.updateMany({
    where: {
      id: listingId,
      userId: loggedInuser.id
    },
    data: {
      dogType,
      dogAge,
      male,
      imageSrc,
      personality,
      dogMonth: dogMonth.month,
      dogName,
      weight: parseInt(weight, 10),
      desc,
      userId: loggedInuser.id
    }
  })
  return NextResponse.json(listing);
}

