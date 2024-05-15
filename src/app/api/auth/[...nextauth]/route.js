import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPass } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { validateEmail, validatePassword } from "@/utils/validate";
import { e2p } from "@/utils/replaceNumber";

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

        if (!validateEmail(email)) throw new Error("ایمیل معتبر نیست");

        if (!validatePassword(password))
          throw new Error(
            e2p(
              "رمز عبور باید لاتین، حداقل 8 کاراکتر با حروف کوچک و بزرگ، عدد و یک حرف خاص باشد"
            )
          );

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
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
