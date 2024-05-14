import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignUpPage from "@/template/SignUpPage";

export default function Page() {
  const session =  getServerSession(authOptions);
  if (session) redirect("/");
  
  return <SignUpPage />;
}
