import styles from "./styles.module.css";
import { MouseEvent, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  menuId: string;
  menuItems: Record<string, string>;
  navigation?: boolean;
  onclick?: Function;
}

function HorizontalNavMenu({
  menuId,
  menuItems,
  navigation = false,
  onclick,
}: Props) {
  const [newStyle, setNewStyle] = useState({});
  const navigate = useNavigate();

  var handleClick = (
    element: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    url: string
  ) => {
    setNewStyle({
      left: (element.target as HTMLInputElement).offsetLeft + "px",
      width: ((element.target as HTMLInputElement).offsetWidth / 3) * 2 + "px",
    });

    onclick ? onclick() : null;
    navigation ? navigate(url) : null;
  };

  useEffect(() => {
    const currentLocation = window.location.pathname;
    const cuurentSelection = document.querySelector(
      `[data-nav-target="${currentLocation}"][data-menu-id="${menuId}"]`
    );

    cuurentSelection
      ? setNewStyle({
          left: (cuurentSelection as HTMLInputElement).offsetLeft + "px",
          width: (cuurentSelection as HTMLInputElement).offsetWidth / 2 + "px",
        })
      : null;
  }, []);

  return (
    <nav className={styles.page_nav_container}>
      {Object.entries(menuItems).map(
        ([name, route], index): ReactNode => (
          <div
            key={index}
            className={styles.page_nav_options}
            data-menu-id={menuId}
            data-nav-target={route}
            onClick={(e) => handleClick(e, route)}
          >
            {name}
          </div>
        )
      )}

      <div className={styles.page_nav_selection} style={newStyle}></div>
    </nav>
  );
}

export default HorizontalNavMenu;
