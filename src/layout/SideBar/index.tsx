import styles from "./styles.module.css";
import MenuItem from "../../components/layout/MenuItem";
import MenuDrawer from "../../components/layout/MenuDrawer";
import AppIcon from "../../assets/AppIcon.tsx";
import { useEffect, useState } from "react";

function SideBar() {
  const [focus, setFocus] = useState("Dashboard");

  useEffect(() => {
    console.log(focus);
  }, [focus]);

  return (
    <nav className={styles.container}>
      <div className={styles.page_Name}>Home</div>
      <div className={styles.menu}>
        <MenuDrawer
          name="Dashboard"
          icon={<AppIcon />}
          setFocus={setFocus}
          focus={focus}
        >
          <MenuItem hrf="/home">Overview</MenuItem>
          <MenuItem hrf="/deployments">Deployments</MenuItem>
          <MenuItem hrf="/warnings">Warnings</MenuItem>
          <MenuItem hrf="/audit_&_logs">Audit & Logs</MenuItem>
        </MenuDrawer>
        <MenuDrawer
          name="Reports  &  Analytics"
          icon={<AppIcon />}
          setFocus={setFocus}
          focus={focus}
        >
          <MenuItem hrf="">example 1</MenuItem>
          <MenuItem hrf="">example 1</MenuItem>
          <MenuItem hrf="">example 1</MenuItem>
        </MenuDrawer>
        <MenuDrawer
          name="Help & Support"
          icon={<AppIcon />}
          setFocus={setFocus}
          focus={focus}
        >
          <MenuItem hrf="">example 1</MenuItem>
          <MenuItem hrf="">example 1</MenuItem>
          <MenuItem hrf="">example 1</MenuItem>
        </MenuDrawer>

        <MenuDrawer
          name="Settings"
          icon={<AppIcon />}
          setFocus={setFocus}
          focus={focus}
        >
          <MenuItem hrf="">example 1</MenuItem>
          <MenuItem hrf="">example 1</MenuItem>
          <MenuItem hrf="">example 1</MenuItem>
        </MenuDrawer>
      </div>
    </nav>
  );
}

export default SideBar;
