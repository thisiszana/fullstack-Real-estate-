import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import styles from "@/layout/DashboardSidebar.module.css";
import LogoutButton from "@/module/LogoutButton";

export default function DashboardSidebar({ children, email, role }) {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? "ادمین" : null}
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profile">آگهی های من</Link>
        <Link href="/dashboard/addpost">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
