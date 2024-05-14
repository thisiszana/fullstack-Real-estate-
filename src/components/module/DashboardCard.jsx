"use client";

import styles from "@/module/DashboardCard.module.css";
import Card from "./Card";
import { Toaster } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export default function DashboardCard({ data }) {

  const editHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}
