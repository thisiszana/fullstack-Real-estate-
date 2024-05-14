import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";
import toast, { Toaster } from "react-hot-toast";

async function Edit({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile)
    return toast.error(">مشکلی پیش آمده است. لطفا دوباره امتحان کنید .");

  return (
    <>
      <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
      <Toaster />
    </>
  );
}

export default Edit;
