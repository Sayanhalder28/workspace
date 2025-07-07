import styles from "./styles.module.css";
import DrawerItem from "../../components/layout/DrawerItem";
import MenuDrawer from "../../components/layout/MenuDrawer";
import AppIcon from "../../assets/AppIcon.tsx";
import HelpIcon from "../../assets/HelpIcon.tsx";
import { useState } from "react";
import MenuItem from "../../components/layout/MenuItem/index.tsx";
import SettingsIcon from "../../assets/SettingsIcon.tsx";
import ReportsIcon from "../../assets/ReportsIcon.tsx";

function SideBar() {
  const [itemFocus, SetItemFocus] = useState(window.location.pathname);

  return (
    <nav className={styles.container}>
      <div className={styles.page_Name}>Home</div>
      <div className={styles.menu}>
        <MenuDrawer name="Dashboard" icon={<AppIcon />} itemFocus={itemFocus}>
          <DrawerItem
            hrf="/app/h"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Overview
          </DrawerItem>
          <DrawerItem
            hrf="/app/h/deployments"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Deployments
          </DrawerItem>
          <DrawerItem
            hrf="/app/h/warnings"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Warnings
          </DrawerItem>
          <DrawerItem
            hrf="/app/h/audit_logs"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Audit & Logs
          </DrawerItem>
        </MenuDrawer>
        <MenuItem
          hrf="/app/h/reports_analytics"
          name="Reports & Analytics"
          icon={<ReportsIcon />}
          itemFocus={itemFocus}
          setItemFocus={SetItemFocus}
        />
        <MenuItem
          hrf="/app/h/help_support"
          name="Help & Suppot"
          icon={<HelpIcon />}
          itemFocus={itemFocus}
          setItemFocus={SetItemFocus}
        />
        <MenuItem
          hrf="/app/h/settings"
          name="Settings"
          icon={<SettingsIcon />}
          itemFocus={itemFocus}
          setItemFocus={SetItemFocus}
        />
      </div>
    </nav>
  );
}

export default SideBar;
