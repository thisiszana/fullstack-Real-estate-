import styles from "@/module/SideBar.module.css";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "src/constant/strings";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          key={i}
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}
