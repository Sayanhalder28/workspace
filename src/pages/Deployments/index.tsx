import styles from "./styles.module.css";
import HorizontalNavMenu from "../../components/layout/HorizontalNavMenu";
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
        <div className={styles.nav_container}>
          <HorizontalNavMenu
            className={styles.nav_main}
            menuId="deplyments-nav"
            menuItems={{
              applications: "Applications",
              servers: "Servers",
              clusters: "Clusters",
            }}
            navigation={true}
          />
        </div>

        <div className={styles.table_selected}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Deployments;
