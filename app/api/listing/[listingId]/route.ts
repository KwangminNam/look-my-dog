import { NextResponse } from "next/server";

import getLoggedInUser from "@/app/actions/getLoginedUser";
import prisma from '@/app/libs/prismadb';

interface IParams {
  listingId?: string;
}

export async function DELETE(request: Request,  { params }: { params: IParams }) {
  const loggedInuser = await getLoggedInUser();

  if (!loggedInuser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  console.log(params)

  if (!listingId || typeof listingId !== 'string') {
    throw new Error("error");
  }

  const listing = await prisma.dogListing.deleteMany({
    where: {
      id: listingId,
      userId: loggedInuser.id
    }
  })
  return NextResponse.json(listing);
}

