import styles from "./styles.module.css";
import DrawerItem from "../../components/layout/DrawerItem";
import MenuDrawer from "../../components/layout/MenuDrawer";
import AppIcon from "../../assets/AppIcon.tsx";
import HelpIcon from "../../assets/HelpIcon.tsx";
import MenuItem from "../../components/layout/MenuItem/index.tsx";
import SettingsIcon from "../../assets/SettingsIcon.tsx";
import ReportsIcon from "../../assets/ReportsIcon.tsx";
import { usePageLocation } from "../../context/PageLocationProvider/index.tsx";

function SideBar() {
  const pageLocation = usePageLocation().pathName;

  const generateHeading = () => {
    var page = pageLocation
      .split("/")[2]
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return page;
  };

  return (
    <nav className={styles.container}>
      <div className={styles.page_name}>{generateHeading()}</div>
      <div className={styles.menu}>
        <MenuDrawer name="Dashboard" icon={<AppIcon />}>
          <DrawerItem hrf="/app/home/overview">Overview</DrawerItem>
          <DrawerItem hrf="/app/home/deployments">Deployments</DrawerItem>
          <DrawerItem hrf="/app/home/warnings">Warnings</DrawerItem>
          <DrawerItem hrf="/app/home/audit_logs">Audit & Logs</DrawerItem>
        </MenuDrawer>
        <MenuItem
          hrf="/app/home/reports_analytics"
          name="Reports & Analytics"
          icon={<ReportsIcon />}
        />
        <MenuItem
          hrf="/app/home/help_support"
          name="Help & Suppot"
          icon={<HelpIcon />}
        />
        <MenuItem
          hrf="/app/home/settings"
          name="Settings"
          icon={<SettingsIcon />}
        />
      </div>
    </nav>
  );
}

export default SideBar;
