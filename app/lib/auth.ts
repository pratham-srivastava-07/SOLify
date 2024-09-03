import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { client } from "./db";



export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // Check if user exists
        const existingUser = await client.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (existingUser) {
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );

          if (isValidPassword) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
            };
          } else {
            throw new Error("Invalid password");
          }
        }

        // If user does not exist, create a new one
        try {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUser = await client.user.create({
            data: {
              email: credentials.email,
              name: credentials.name || "Unnamed User", // Default name if not provided
              password: hashedPassword,
            },
          });

          return {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email,
          };
        } catch (e) {
          console.error("Error creating user:", e);
          throw new Error("User creation failed");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }: any) {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
