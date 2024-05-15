import User from "@/models/User";
import { hashedPass } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { e2p } from "@/utils/replaceNumber";
import { validateEmail, validatePassword } from "@/utils/validate";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        { error: "ایمیل و رمز عبور را وارد کنید!" },
        { status: 422 }
      );

    if (!validateEmail(email))
      return NextResponse.json(
        {
          error: "ایمیل معتبر نیست",
        },
        { status: 422 }
      );

    if (!validatePassword(password))
      return NextResponse.json(
        {
          error: e2p(
            "رمز عبور باید لاتین، حداقل 8 کاراکتر با حروف کوچک و بزرگ، عدد و یک حرف خاص باشد"
          ),
        },
        { status: 422 }
      );

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return NextResponse.json(
        { error: "این کاربر وجود دارد!" },
        { status: 422 }
      );

    const hashedPassword = await hashedPass(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "مشکلی در اتصال به دیتابیس پیش آمده!" },
      { status: 500 }
    );
  }
}
