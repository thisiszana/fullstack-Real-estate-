import Card from "@/module/Card";
import SidebarProfile from "@/module/SidebarProfile";
import styles from "@/template/BuyResidentialsPage.module.css";

export default function BuyResidentialsPage({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarProfile />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}
