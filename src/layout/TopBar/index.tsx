import styles from "./styles.module.css";
import BrandLogo from "../../assets/J&JLogo.svg";
import GlobIcon from "../../assets/GlobIcon.svg";
import { MouseEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "../../components/layout/UserDetais";
import SearchBox from "../../components/layout/SearchBox";

function TopBar() {
  const [newStyle, setNewStyle] = useState({});
  const navigate = useNavigate();

  var handleClick = (
    element: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    url: string
  ) => {
    setNewStyle({
      left: (element.target as HTMLInputElement).offsetLeft + "px",
      width: (element.target as HTMLInputElement).offsetWidth / 2 + "px",
    });

    navigate(url);
  };

  return (
    <header>
      <div className={`${styles.container} ${styles.container_alignments}`}>
        <div className={styles.section_left}>
          <img src={BrandLogo} alt="BrandLogo" height={40} />
          <div className={styles.brand_name}>Config Store</div>
          <nav className={styles.page_nav}>
            <div
              className={styles.page_nav_options}
              onClick={(e) => handleClick(e, "/app/home")}
            >
              Home
            </div>
            <div
              className={styles.page_nav_options}
              onClick={(e) => handleClick(e, "/app/tickets_&_services")}
            >
              Tickets & Services
            </div>
            <div
              className={styles.page_nav_options}
              onClick={(e) => handleClick(e, "/app/notifications")}
            >
              Notifications
            </div>
            <div className={styles.page_nav_selection} style={newStyle}></div>
          </nav>
        </div>
        <div className={styles.section_right}>
          <SearchBox />
          <UserDetails />
          {/* This component will fetch the profile data and prepare the user section */}
          <img src={GlobIcon} alt="floab_icon" height={20} width={20} />
        </div>
      </div>
      <div className={`${styles.container} ${styles.fake_container}`}></div>
    </header>
  );
}

export default TopBar;
