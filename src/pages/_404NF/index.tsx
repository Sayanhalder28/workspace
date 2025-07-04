import styles from "./styles.module.css";
import _404 from "../../assets/_404.tsx";
import { useNavigate } from "react-router-dom";

function _404NF() {

  const Navigate = useNavigate()

  return (
    <>
      <div className={styles.container}>
        <_404 />
        <h1>Page Not Found</h1>
        <button className={styles.homeButton} onClick={() => Navigate("/h")}>
          Go to Home
        </button>
      </div>
    </>
  );
}

export default _404NF;
