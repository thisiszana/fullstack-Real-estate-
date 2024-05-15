import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import toast, { Toaster } from "react-hot-toast";

export default async function BuyResidentials({searchParams}) {
  //اینجا باید دامنه اصلی سایت یا پورت سیستم رو قرار بدهید.
  const res = await fetch(`${process.env.PORT}/api/profile`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return toast.error("مشکلی پیش آمده است");

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return (
    <>
      <BuyResidentialsPage data={finalData} />
      <Toaster />
    </>
  );
}
