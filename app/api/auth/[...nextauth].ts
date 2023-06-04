import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from '@/app/libs/prismadb';
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/naver'
import CredentialProvider from 'next-auth/providers/credentials'
import bycrpt from 'bcrypt';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials){
        if(!credentials?.email || credentials.password){
          throw new Error("INVALID CREADNETIAL")
        }

        const user = await prisma.user.findUnique({
          where:{
            email:credentials.email
          }
        })
        if(!user || !user.hashedPassword){
          throw new Error("INVALID CREADNETIAL")
        }

        const isCorrectPassword  = await bycrpt.compare(
          credentials.password,
          user.hashedPassword
        );

        if(!isCorrectPassword) {
          throw new Error("비밀번호  틀렸음")
        }

        return user;
      }
    })
  ],
  pages :{
    signIn: '/'
  },
  debug: process.env.NODE_ENV === 'development',
  session:{
    strategy :'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);