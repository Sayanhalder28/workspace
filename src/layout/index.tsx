import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import styles from "./styles.module.css";

function LayOut() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <nav>
        <SideBar />
      </nav>
      <main className={styles.main_container}>
        <Outlet />
      </main>
    </>
  );
}

export default LayOut;
