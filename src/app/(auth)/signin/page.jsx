import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInPage from "@/template/SignInPage";

export default function page() {
  const session =  getServerSession(authOptions);
  if (session) redirect("/");

  return <SignInPage />;
}
