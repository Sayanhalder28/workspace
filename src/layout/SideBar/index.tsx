import styles from "./styles.module.css";
import MenuItem from "../../components/layout/MenuItem";
import MenuDrawer from "../../components/layout/MenuDrawer";
import AppIcon from "../../assets/AppIcon.svg";

function SideBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.page_Name}>Home</div>
      <div className={styles.menu}>
        <MenuDrawer name="Overview" icon={AppIcon}>
          <MenuItem>Overview</MenuItem>
          <MenuItem>Deployments</MenuItem>
          <MenuItem>Warnings</MenuItem>
          <MenuItem>Audit & Logs</MenuItem>
        </MenuDrawer>
        <MenuDrawer name="Report" icon={AppIcon}>
          <MenuItem>example 1</MenuItem>
          <MenuItem>example 1</MenuItem>
          <MenuItem>example 1</MenuItem>
        </MenuDrawer>
        <MenuDrawer name="Help & Support" icon={AppIcon}>
          <MenuItem>example 1</MenuItem>
          <MenuItem>example 1</MenuItem>
          <MenuItem>example 1</MenuItem>
        </MenuDrawer>
        <MenuDrawer name="Settings" icon={AppIcon}>
          <MenuItem>example 1</MenuItem>
          <MenuItem>example 1</MenuItem>
          <MenuItem>example 1</MenuItem>
        </MenuDrawer>
      </div>
    </nav>
  );
}

export default SideBar;
