import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { ReactNode, useRef } from "react";

interface Props {
  hrf: string;
  focus?: string;
  setFocus?: Function;
  children?: ReactNode;
}

function MenuItem({ hrf, focus, setFocus, children }: Props) {
  const Navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onClick={() => {
        if (focus && setFocus) {
          setFocus(focus);
          Navigate(hrf);
        } else Navigate(hrf);
      }}
    >
      {children ? children : "Item Name"}
    </div>
  );
}

export default MenuItem;
