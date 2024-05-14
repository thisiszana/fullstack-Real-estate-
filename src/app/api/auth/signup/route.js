import User from "@/utils/User";
import { hashedPass } from "@/models/auth";
import connectDB from "@/utils/connectDB";
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

    if (!email)
      return NextResponse.json(
        { error: "ایمیل را وارد کنید!" },
        { status: 422 }
      );

    if (!password)
      return NextResponse.json(
        { error: "رمز عبور را وارد کنید!" },
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
