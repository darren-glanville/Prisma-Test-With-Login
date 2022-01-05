import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
    secret: "dM/xe8jwfoiYUFJBnY+CuIzzxpPNiJBqfYIxVVyhI5k=",
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user, token }) {
            session.user.role = user.role; //add role

            return session;
        },
        redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) return url;
            // Allows relative callback URLs
            else if (url.startsWith("/"))
                return new URL(url, baseUrl).toString();
            return baseUrl;
        },
    },

    pages: {
        signIn: "/auth/signin",
    },
});
