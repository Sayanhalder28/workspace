import styles from "./styles.module.css";
import Table from "../../components/overview/Table";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
        <Table name="Applications" className={`${styles.grid_item} ${styles.application_table}`} />
        <Table name="Clusters" className={`${styles.grid_item} ${styles.cluster_table}`} />
        <Table name="Warnings" className={`${styles.grid_item} ${styles.warning_table}`} />
        <Table name="Servers" className={`${styles.grid_item} ${styles.server_table}`} />
        <Table name="Recent Logs " className={`${styles.grid_item} ${styles.audit_log_table}`} />
      </div>
    </div>
  );
}

export default Overview;
