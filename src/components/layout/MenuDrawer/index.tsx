import Styles from "./styles.module.css";
import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  name: string;
  icon: string;
}

function MenuDrawer({ children, name, icon }: Props) {
  const [selected, setSelected] = useState(false);
  var openList: React.CSSProperties = {
    maxHeight: "400px",
    overflowY: "scroll",
  };

  var changeTextColor: React.CSSProperties = {
    color: "#1677FF",
  };

  return (
    <div
      className={Styles.container}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <div
        className={Styles.drawer_title}
        style={selected ? changeTextColor : {}}
      >
        <img src={icon} alt="i" height={18} width={18} />
        <span>{name}</span>
      </div>
      <div className={Styles.drawer_list} style={selected ? openList : {}}>
        {children}
      </div>
    </div>
  );
}

export default MenuDrawer;
