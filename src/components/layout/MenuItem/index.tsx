import { useNavigate } from "react-router-dom";
import Styles from "./styles.module.css";
import React, { cloneElement, isValidElement } from "react";

interface Props {
  hrf: string;
  name: string;
  icon?: React.ReactNode;
  itemFocus?: string;
  setItemFocus?: Function;
  setDrawerfocus: Function;
}

function MenuItem({
  hrf,
  name,
  icon,
  itemFocus,
  setItemFocus,
  setDrawerfocus,
}: Props) {
  const Navigate = useNavigate();

  const focusedBox: React.CSSProperties =
    hrf == itemFocus
      ? {
          backgroundColor: "#E9F2FF",
          color: "#1677FF",
        }
      : {};

  const Icon = isValidElement<{ color: string; height: string }>(icon)
    ? cloneElement(icon, {
        color: itemFocus == hrf ? "#1677FF" : "#5e5e5e",
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
          setItemFocus ? setItemFocus(hrf) : null;
          setDrawerfocus("");
        }}
      >
        {Icon}

        <span>{name}</span>
      </div>
    </div>
  );
}

export default MenuItem;
