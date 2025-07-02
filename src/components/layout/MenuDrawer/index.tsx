import Styles from "./styles.module.css";
import React, { cloneElement, isValidElement, useState } from "react";

interface Props {
  name?: string;
  icon?: React.ReactNode;
  focus?: string;
  setFocus?: Function;
  children?: React.ReactNode;
}

function MenuDrawer({ children, name, icon, focus, setFocus }: Props) {
  const [open, setOpen] = useState(false);

  var openList: React.CSSProperties = open
    ? {
        maxHeight: "400px",
        overflowY: "scroll",
      }
    : {};

  var focusedBox: React.CSSProperties =
    focus == name
      ? {
          backgroundColor: "#E9F2FF",
          color: "#1677FF",
        }
      : {};

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return isValidElement<{ focus?: string; setFocus?: Function }>(child)
        ? cloneElement(child, {
            focus: name,
            setFocus: setFocus,
          })
        : null;
    });
  };

  const Icon = isValidElement<{ color: string; height: string }>(icon)
    ? cloneElement(icon, {
        color: focus == name ? "#1677FF" : "#5e5e5e",
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
