import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInPage from "@/template/SignInPage";

async  function Signin() {
  const session = await getServerSession(authOptions);
  console.log(session)
  if (session) redirect("/");

  return <SignInPage />;
}

export default Signin
