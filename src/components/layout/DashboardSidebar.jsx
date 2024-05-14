import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import styles from "@/layout/DashboardSidebar.module.css";
import LogoutButton from "@/module/LogoutButton";

export default function DashboardSidebar({children, email}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
       
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  )
}
