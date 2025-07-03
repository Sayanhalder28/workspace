import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { ReactNode } from "react";

interface Props {
  hrf: string;
  itemFocus?: string;
  setItemFocus?: Function;
  drawerFocus?: string;
  setDrawerFocus?: Function;
  children?: ReactNode;
}

function DrawerItem({
  hrf,
  itemFocus,
  setItemFocus,
  drawerFocus,
  setDrawerFocus,
  children,
}: Props) {
  const Navigate = useNavigate();

  const focusBox: React.CSSProperties =
    itemFocus == hrf
      ? {
          color: "#1677FF",
        }
      : {};

  return (
    <div
      className={styles.container}
      onClick={() => {
        if (drawerFocus && setDrawerFocus) {
          setDrawerFocus(drawerFocus);
        }
        if (setItemFocus) {
          setItemFocus(hrf);
        }
        Navigate(hrf);
      }}
      style={focusBox}
    >
      {children ? children : "Item Name"}
    </div>
  );
}

export default DrawerItem;
