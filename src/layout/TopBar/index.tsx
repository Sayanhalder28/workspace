import styles from "./styles.module.css";

function TopBar() {
  return (
    <header>
      <div className={styles.container}>Top Bar</div>
      <div className={`${styles.container} ${styles.container_fake}`}></div>
    </header>
  );
}

export default TopBar;
