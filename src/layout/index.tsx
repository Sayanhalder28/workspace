import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import styles from "./styles.module.css";

function LayOut() {
  return (
    <>
      <div className={styles.viewport}>
        <TopBar />
        <section className={styles.content_container}>
          <SideBar />
          <main className={styles.main_container}>
            <Outlet />
          </main>
        </section>
      </div>
    </>
  );
}

export default LayOut;
