import styles from "./styles.module.css";
import Table from "../../components/overview/Table";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
        <Table style={`${styles.grid_item} ${styles.application_table}`} />
        <Table style={`${styles.grid_item} ${styles.cluster_table}`} />
        <Table style={`${styles.grid_item} ${styles.warning_table}`} />
        <Table style={`${styles.grid_item} ${styles.server_table}`} />
        <Table style={`${styles.grid_item} ${styles.audit_log_table}`} />
      </div>
    </div>
  );
}

export default Overview;
