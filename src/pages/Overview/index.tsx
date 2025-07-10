import styles from "./styles.module.css";
import Table from "../../components/common/Table";
import {
  ApplicationsRecord,
  ApplicationsRecordUniqueFields,
  ClusterRecord,
  ClusterRecordUniqueFields,
  ServerRecord,
  ServerRecordUniqueFields,
  WarningMessageData,
  RecentLogData,
} from "../../utils/DummyData";
import AppIcon from "../../assets/AppIcon.svg";
import clusterIcon from "../../assets/ClusterIcon.svg";
import serverIcon from "../../assets/ServerIcon.svg";
import Feed from "../../components/common/Feed";
import InfoIcon from "../../assets/InfIcon";

function Overview() {
  const addStatusColour = (tableName: string, fieldname: string) => {
    const CellList = document.querySelectorAll(
      `[cell-field="${fieldname}"][cell-table="${tableName}"]`
    );
    CellList.forEach((cell) => {
      const value = cell.getAttribute("cell-value")?.toLowerCase();
      const statusClassMap: Record<string, string> = {
        running: "green-dot",
        active: "green-dot",
        online: "green-dot",

        down: "red-dot",
        inactive: "red-dot",
        offline: "red-dot",

        debugging: "orange-dot",
        maintenance: "orange-dot",
        restarting: "orange-dot",
      };

      const cssClass = value
        ? statusClassMap[value.toLowerCase()]
        : false || "blank-dot";
      cell.classList.add(cssClass);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
        <Table
          name="Applications"
          className={`${styles.grid_item} ${styles.application_table}`}
          records={ApplicationsRecord}
          uniqueFields={ApplicationsRecordUniqueFields}
          icon={AppIcon}
          editField={() => addStatusColour("Applications", "status")}
        />
        <Table
          name="Clusters"
          className={`${styles.grid_item} ${styles.cluster_table}`}
          records={ClusterRecord}
          uniqueFields={ClusterRecordUniqueFields}
          icon={clusterIcon}
          editField={() => addStatusColour("Clusters", "status")}
        />

        <Feed
          name="Warning"
          className={`${styles.grid_item} ${styles.warning_table}`}
          icon={<InfoIcon fill="#ffffff" height="25px" />}
          massage={WarningMessageData}
          showDate={false}
          showLine={true}
        />
        <Table
          name="Servers"
          className={`${styles.grid_item} ${styles.server_table}`}
          records={ServerRecord}
          uniqueFields={ServerRecordUniqueFields}
          icon={serverIcon}
          editField={() => addStatusColour("Servers", "status")}
        />
        <Feed
          className={`${styles.grid_item} ${styles.audit_log_table}`}
          name="Recent Logs"
          icon={<InfoIcon height="25px" />}
          massage={RecentLogData}
          showDate={true}
          showLine={false}
        />
      </div>
    </div>
  );
}

export default Overview;
