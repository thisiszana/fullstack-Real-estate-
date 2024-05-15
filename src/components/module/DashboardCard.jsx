"use client";

import styles from "@/module/DashboardCard.module.css";
import Card from "./Card";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./Loader";

export default function DashboardCard({ data }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-profile/${data._id}`);
  };
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <Card data={data} className={styles.cardBox} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {`حذف آگهی`}
              <AiOutlineDelete />
            </>
          )}
        </button>
      </div>
      <Toaster />
    </div>
  );
}
