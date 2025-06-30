import styles from "./styles.module.css";

function TopBar() {
  return (
    <header>
      <div className={`${styles.container} ${styles.container_items}`}>
        <div className={styles.section_left}>left half</div>
        <div className={styles.section_right}>right half</div>
      </div>
      <div className={`${styles.container} ${styles.fake_container}`}></div>
    </header>
  );
}

export default TopBar;
