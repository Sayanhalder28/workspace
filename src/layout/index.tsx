import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import PageLocationProvider from "../context/PageLocationProvider";

function LayOut() {
  return (
    <>
      <PageLocationProvider>
        <div className={styles.viewport}>
          <TopBar />
          <section className={styles.content_container}>
            <SideBar />
            <main className={styles.main_container}>
              <Outlet />
            </main>
          </section>
        </div>
      </PageLocationProvider>
    </>
  );
}

export default LayOut;
