import styles from "./styles.module.css";
import DrawerItem from "../../components/layout/DrawerItem";
import MenuDrawer from "../../components/layout/MenuDrawer";
import AppIcon from "../../assets/AppIcon.tsx";
import HelpIcon from "../../assets/HelpIcon.tsx";
import { useState } from "react";
import MenuItem from "../../components/layout/MenuItem/index.tsx";

function SideBar() {
  const [drawerfocus, setDrawerfocus] = useState(
    window.location.pathname == "/" ? "Dashboard" : ""
  );
  const [itemFocus, SetItemFocus] = useState(window.location.pathname);

  return (
    <nav className={styles.container}>
      <div className={styles.page_Name}>Home</div>
      <div className={styles.menu}>
        <MenuDrawer
          name="Dashboard"
          icon={<AppIcon />}
          setDrawerFocus={setDrawerfocus}
          drawerFocus={drawerfocus}
        >
          <DrawerItem hrf="/" itemFocus={itemFocus} setItemFocus={SetItemFocus}>
            Overview
          </DrawerItem>
          <DrawerItem
            hrf="/deployments"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Deployments
          </DrawerItem>
          <DrawerItem
            hrf="/warnings"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Warnings
          </DrawerItem>
          <DrawerItem
            hrf="/audit_&_logs"
            itemFocus={itemFocus}
            setItemFocus={SetItemFocus}
          >
            Audit & Logs
          </DrawerItem>
        </MenuDrawer>
        <MenuItem
          hrf="/reports_&_analytics"
          name="Reports & Analytics"
          icon={<HelpIcon />}
          itemFocus={itemFocus}
          setItemFocus={SetItemFocus}
          setDrawerfocus={setDrawerfocus}
        />
        <MenuItem
          hrf="/help_&_support"
          name="Help & Suppot"
          icon={<HelpIcon />}
          itemFocus={itemFocus}
          setItemFocus={SetItemFocus}
          setDrawerfocus={setDrawerfocus}
        />
        <MenuItem
          hrf="/settings"
          name="Settings"
          icon={<HelpIcon />}
          itemFocus={itemFocus}
          setItemFocus={SetItemFocus}
          setDrawerfocus={setDrawerfocus}
        />
      </div>
    </nav>
  );
}

export default SideBar;
