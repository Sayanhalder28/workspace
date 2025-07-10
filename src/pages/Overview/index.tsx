import styles from "./styles.module.css";
import Table from "../../components/overview/Table";
import {
  ApplicationsReecord,
  ApplicationsRecordUniqueFields,
} from "../../utils/DummyData";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
        <Table
          name="Applications"
          className={`${styles.grid_item} ${styles.application_table}`}
          records={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
        />
        <Table
          name="Clusters"
          className={`${styles.grid_item} ${styles.cluster_table}`}
          records={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
        />
        <div className={`${styles.grid_item} ${styles.warning_table}`} />
        <Table
          name="Servers"
          className={`${styles.grid_item} ${styles.server_table}`}
          records={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
        />
        <div className={`${styles.grid_item} ${styles.audit_log_table}`} />
      </div>
    </div>
  );
}

export default Overview;
