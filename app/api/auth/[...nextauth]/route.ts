import { handler } from "@/app/lib/auth";
import NextAuth from "next-auth/next";



const authHandler = NextAuth(handler) 

export {authHandler as GET, authHandler as POST}

