import styles from "./styles.module.css";
import { MouseEvent, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  menuId: string;
  menuItems: Record<string, string>;
  navigation?: boolean;
  onclick?: Function;
}

function HorizontalNavMenu({
  className,
  menuId,
  menuItems,
  navigation = false,
  onclick,
}: Props) {
  const [newStyle, setNewStyle] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

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

  if (navigation) {
    useEffect(() => {
      const windowLocation = location.pathname;

      var curentSelection = Object.keys(menuItems).find((route) =>
        windowLocation.includes(route)
      );

      const targetItem = document.querySelector(
        `[data-nav-target="${curentSelection}"][data-menu-id="${menuId}"]`
      );

      targetItem
        ? setNewStyle({
            left: (targetItem as HTMLInputElement).offsetLeft + "px",
            width:
              ((targetItem as HTMLInputElement).offsetWidth / 3) * 2 + "px",
          })
        : null;
    }, [location.pathname]);
  }

  return (
    <nav className={`${styles.page_nav_container} ${className}`}>
      {Object.entries(menuItems).map(
        ([route, name], index): ReactNode => (
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

      <span className={styles.page_nav_selection} style={newStyle}></span>
    </nav>
  );
}

export default HorizontalNavMenu;
