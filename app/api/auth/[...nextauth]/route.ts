import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET!, 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    scope: "openid email profile",
                },
            }
        }),
    ],
});

export { handler as GET, handler as POST };