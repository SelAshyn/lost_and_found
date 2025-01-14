import NextAuth, { DefaultSession, User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedUser extends User {
    role?: string;
}

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            role?: string;
        } & DefaultSession["user"]
    }
}

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    callbacks: {
        async signIn({ user }: { user: ExtendedUser }) {
            const adminEmails = ['024a217@sxc.edu.np','rhishavlamichhane08@gmail.com'];
            user.role = adminEmails.includes(user.email ?? '') ? 'admin' : 'user';
            return true;
        },
        async jwt({ token, user }: { token: JWT; user?: ExtendedUser }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            session.user.role = token.role as string;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };