import Styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import React, { cloneElement, isValidElement } from "react";
import { usePageLocation } from "../../../context/PageLocationProvider";

interface Props {
  hrf: string;
  name: string;
  icon?: React.ReactNode;
}

function MenuItem({ hrf, name, icon }: Props) {
  const Navigate = useNavigate();
  const pageLocation = usePageLocation().pathName;

  const focusedBox: React.CSSProperties =
    hrf == pageLocation
      ? {
          backgroundColor: "#E9F2FF",
          color: "#1677FF",
        }
      : {};

  const Icon = isValidElement<{ color: string; height: string }>(icon)
    ? cloneElement(icon, {
        color: pageLocation == hrf ? "#1677FF" : "#5e5e5e",
        height: "18px",
      })
    : null;

  return (
    <div className={Styles.container}>
      <div
        className={Styles.drawer_title}
        style={focusedBox}
        onClick={() => {
          Navigate(hrf);
        }}
      >
        {Icon}

        <span>{name}</span>
      </div>
    </div>
  );
}

export default MenuItem;
