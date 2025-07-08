import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { ReactNode } from "react";
import { usePageLocation } from "../../../context/PageLocationProvider";

interface Props {
  hrf: string;
  children?: ReactNode;
}

function DrawerItem({ hrf, children }: Props) {
  const Navigate = useNavigate();
  const pageLocation = usePageLocation().pathName;

  const focusBox: React.CSSProperties =
    pageLocation == hrf
      ? {
          color: "#1677FF",
        }
      : {};

  return (
    <div
      className={styles.container}
      onClick={() => {
        Navigate(hrf);
      }}
      style={focusBox}
    >
      {children ? children : "Item Name"}
    </div>
  );
}

export default DrawerItem;
