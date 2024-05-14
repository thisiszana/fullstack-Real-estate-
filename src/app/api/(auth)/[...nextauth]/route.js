import User from "@/models/User";
import { verifyPass } from "@/models/auth";
import connectDB from "@/models/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در اتصال به سرور به وجود آمده!");
        }

        if (!email || !password)
          throw new Error("ایمیل و رمز عبور را وارد کنید!");

        if (!email) throw new Error("ایمیل را وارد کنید!");

        if (!password) throw new Error("رمز عبور را وارد کنید!");

        const user = await User.findOne({ email });

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید!");

        const isValid = await verifyPass(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز ورود اشتباه است!");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as Get, handler as POST };
