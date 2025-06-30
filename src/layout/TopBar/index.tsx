import styles from "./styles.module.css";
import BrandLogo from "../../assets/J&JLogo.svg";

function TopBar() {
  var handleClick = (url) => {};

  return (
    <header>
      <div className={`${styles.container} ${styles.container_alignments}`}>
        <div className={styles.section_left}>
          <img src={BrandLogo} alt="BrandLogo" height={40} />
          <div className={styles.brand_name}>Config Store</div>
          <nav className={styles.page_nav}>
            <div
              className={styles.page_nav_options}
              onClick={() => handleClick('optionOne',"pageUrl")}
            >
              Home
            </div>
            <div
              className={styles.page_nav_options}
              onClick={() => handleClick('optionTwo',"pageUrl")}
            >
              Tickets & Services
            </div>
            <div
              className={styles.page_nav_options}
              onClick={() => handleClick('optionThree',"pageUrl")}
            >
              Notifications
            </div>
            <div className={styles.page_nav_selection}></div>
          </nav>
        </div>
        <div className={styles.section_right}>right half</div>
      </div>
      <div className={`${styles.container} ${styles.fake_container}`}></div>
    </header>
  );
}

export default TopBar;
