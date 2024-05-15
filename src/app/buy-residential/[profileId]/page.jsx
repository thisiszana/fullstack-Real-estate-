import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import toast, { Toaster } from "react-hot-toast";

export default async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return toast.error("مشکلی پیش آمده است");
  return (
    <>
      <DetailsPage data={profile} />
      <Toaster />
    </>
  );
}
