import { usePageLocation } from "../../../context/PageLocationProvider";
import Styles from "./styles.module.css";
import React, {
  cloneElement,
  isValidElement,
  useState,
} from "react";

interface Props {
  name: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function MenuDrawer({ name, icon, children }: Props) {
  const [open, setOpen] = useState(false);
  var pageLocation = usePageLocation().pathName;

  const MenuItemHrefs = React.Children.map(children, (child) => {
    if (React.isValidElement<{ hrf: string }>(child)) {
      return child.props.hrf;
    }
    return null;
  });

  const drawerSelected: boolean =
    Array.isArray(MenuItemHrefs) && pageLocation != null
      ? MenuItemHrefs.includes(pageLocation)
      : false;

  const Icon = isValidElement<{ color: string; height: string }>(icon)
    ? cloneElement(icon, {
        color: drawerSelected ? "#1677FF" : "#5e5e5e",
        height: "18px",
      })
    : null;

  var focusedBox: React.CSSProperties = drawerSelected
    ? {
        backgroundColor: "#E9F2FF",
        color: "#1677FF",
      }
    : {};

  var openList: React.CSSProperties = open
    ? {
        maxHeight: "400px",
        overflowY: "scroll",
      }
    : {};

  return (
    <div className={Styles.container}>
      <div
        className={Styles.drawer_title}
        style={focusedBox}
        onClick={() => setOpen(!open)}
      >
        {Icon}

        <span>{name}</span>
      </div>
      <div className={Styles.drawer_list} style={openList}>
        {children}
      </div>
    </div>
  );
}

export default MenuDrawer;
