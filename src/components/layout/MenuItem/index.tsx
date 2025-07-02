import styles from "./styles.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function MenuItem({ children }: Props) {
  return (
    <div className={styles.container}>{children ? children : "Item Name"}</div>
  );
}

export default MenuItem;
