import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getLoggedInUser from '../../../actions/getLoginedUser'

interface Iparams {
  listingId?: string;
}

export async function POST(req: Request, { params }: { params: Iparams }) {

  const currentUser = await getLoggedInUser();
  if (!currentUser) return NextResponse.error();

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error("ID ERROR");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds
    }
  });
  return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: { params: Iparams }) {

  const currentUser = await getLoggedInUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error("ID ERROR");
  };

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter((item) => item !== listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds
    }
  });

  return NextResponse.json(user);
}