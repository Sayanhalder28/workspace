import Styles from "./styles.module.css";
import React, { cloneElement, isValidElement, useState } from "react";

interface Props {
  name: string;
  icon?: React.ReactNode;
  drawerFocus?: string;
  setDrawerFocus?: Function;
  children: React.ReactNode;
}

function MenuDrawer({
  name,
  icon,
  drawerFocus,
  setDrawerFocus,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  console.log(children);

  var openList: React.CSSProperties = open
    ? {
        maxHeight: "400px",
        overflowY: "scroll",
      }
    : {};

  var focusedBox: React.CSSProperties =
    drawerFocus == name
      ? {
          backgroundColor: "#E9F2FF",
          color: "#1677FF",
        }
      : {};

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return isValidElement<{
        drawerFocus?: string;
        setDrawerFocus?: Function;
      }>(child)
        ? cloneElement(child, {
            drawerFocus: name,
            setDrawerFocus: setDrawerFocus,
          })
        : child;
    });
  };

  const Icon = isValidElement<{ color: string; height: string }>(icon)
    ? cloneElement(icon, {
        color: drawerFocus == name ? "#1677FF" : "#5e5e5e",
        height: "18px",
      })
    : null;

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
        {renderChildren()}
      </div>
    </div>
  );
}

export default MenuDrawer;
