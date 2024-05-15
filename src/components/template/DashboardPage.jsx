import styles from "@/template/DashboardPage.module.css";

export default function DashboardPage({ createdAt }) {
  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
    </div>
  );
}
