import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcrypt"
import { client } from "./db";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await client.user.findFirst({
                where: {
                    email: credentials.email
                }
            })
            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    return {
                        id: existingUser.id.toString(),
                        name: existingUser.name,
                        email: existingUser.email
                    }
                }
                return null;
        }
        try {
            const user = await client.user.create({
                data: {
                    email: credentials.email,
                    name:  credentials.name,
                    password: hashedPassword
                }
            })
        }catch(e) {
            console.log(e);
        }
        return null;
    }
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async  session({token, session}: any) {
        session.user.id = token.sub

        return session
    }
  }
})

