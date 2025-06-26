import styles from "./styles.module.css";

function TopBar() {
  return (
    <>
      <div className={styles.container}>Top Bar</div>
      <div className={`${styles.container} ${styles.container_fake}`}></div>
    </>
  );
}

export default TopBar;
