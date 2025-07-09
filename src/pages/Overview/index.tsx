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
          record={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          fieldMap={["type", "cpu"]}
        />
        <Table
          name="Clusters"
          className={`${styles.grid_item} ${styles.cluster_table}`}
          record={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          fieldMap={["type", "cpu"]}
        />
        <Table
          name="Warnings"
          className={`${styles.grid_item} ${styles.warning_table}`}
          record={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          fieldMap={["type", "cpu"]}
        />
        <Table
          name="Servers"
          className={`${styles.grid_item} ${styles.server_table}`}
          record={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          fieldMap={["type", "cpu"]}
        />
        <Table
          name="Recent Logs "
          className={`${styles.grid_item} ${styles.audit_log_table}`}
          record={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          fieldMap={["type", "cpu"]}
        />
      </div>
    </div>
  );
}

export default Overview;
