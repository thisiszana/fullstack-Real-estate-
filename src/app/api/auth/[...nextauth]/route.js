import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/utils/User";
import { verifyPass } from "@/models/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        }

        const isValid = await verifyPass(password, user.password);

        if (!isValid) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        return { email };
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/sigin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
