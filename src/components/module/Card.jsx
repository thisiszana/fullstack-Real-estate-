import styles from "@/module/Card.module.css";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { icons } from "src/constant/icon";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Card({
  data: { _id, category, title, location, price },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}
