import styles from "./styles.module.css";
import Table from "../../components/common/Table";
import {
  ApplicationsReecord,
  ApplicationsRecordUniqueFields,
  dummyMassageData,
} from "../../utils/DummyData";
import AppIcon from "../../assets/AppIcon.svg";
import clusterIcon from "../../assets/ClusterIcon.svg";
import serverIcon from "../../assets/ServerIcon.svg";
import Feed from "../../components/common/Feed";
import infoIcon from "../../assets/infoIcon.svg";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
        <Table
          name="Applications"
          className={`${styles.grid_item} ${styles.application_table}`}
          records={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          icon={AppIcon}
        />
        <Table
          name="Clusters"
          className={`${styles.grid_item} ${styles.cluster_table}`}
          records={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          icon={clusterIcon}
        />

        <Feed
          name="Warning"
          className={`${styles.grid_item} ${styles.warning_table}`}
          icon={<img src={infoIcon} width={22} />}
          massage={dummyMassageData}
          showDate={false}
          showLine={true}
        />
        <Table
          name="Servers"
          className={`${styles.grid_item} ${styles.server_table}`}
          records={ApplicationsReecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          icon={serverIcon}
        />
        <Feed
          className={`${styles.grid_item} ${styles.audit_log_table}`}
          name="Recent Logs"
          icon={<img src={infoIcon} width={22} />}
          massage={dummyMassageData}
          showDate={true}
          showLine={false}
        />
      </div>
    </div>
  );
}

export default Overview;
