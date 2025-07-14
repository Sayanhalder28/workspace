import styles from "./styles.module.css";
import BrandLogo from "../../assets/J&JLogo.svg";
import GlobIcon from "../../assets/GlobIcon.svg";
import UserDetails from "../../components/layout/UserDetais";
import SearchBox from "../../components/layout/SearchBox";
import HorizontalNavMenu from "../../components/layout/HorizontalNavMenu";

function TopBar() {
  return (
    <header>
      <div className={`${styles.container} ${styles.container_alignments}`}>
        <div className={styles.section_left}>
          <img src={BrandLogo} alt="BrandLogo" height={40} />
          <div className={styles.brand_name}>Config Store</div>
          <HorizontalNavMenu
            menuId="top-bar-nav"
            menuItems={{
              Home: "/app/home",
              "Tickets & Services": "/app/tickets_&_services",
              Notifications: "/app/notifications",
            }}
            navigation={true}
          />
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
