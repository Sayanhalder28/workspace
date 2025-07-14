import HorizontalNavMenu from "../../components/layout/HorizontalNavMenu";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

function Deployments() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.page_details}>
          <div>Deployment</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ullamcorper eros dim.
          </p>
        </div>
        <button>New</button>
      </div>
      <div className={styles.body}>
        <HorizontalNavMenu
          menuId="deplyments-nav"
          menuItems={{
            Applications: "applications",
            Servers: "servers",
            Cluster: "clusters",
          }}
        />
        <div className={styles.table_selected}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Deployments;
