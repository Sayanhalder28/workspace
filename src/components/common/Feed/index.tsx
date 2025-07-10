import styles from "./styles.module.css";
import DateIcon from "../../../assets/DateIcon.svg";
import { ReactNode } from "react";

interface Props {
  className: string;
  icon: ReactNode;
  name: string;
  massage: Record<string, string>;
  showDate: boolean;
  showLine: boolean;
}

function Feed({ className, icon, name, massage, showDate, showLine }: Props) {
  return (
    <div className={className}>
      <div className={styles.feed}>
        <div className={styles.feed_heading}>{name}</div>
        <div className={styles.feed_body}>
          {Object.entries(massage).map(([dateTime, massage], index) => (
            <div
              key={index}
              className={styles.feed_item}
              style={showLine ? { borderBottom: "1px solid #6fa1ff" } : {}}
            >
              <div className={styles.feed_massage}>
                <div className={styles.feed_icon}>{icon}</div>
                <p>{massage}</p>
              </div>

              {showDate ? (
                <div className={styles.feed_date_time}>
                  <img src={DateIcon} alt="dt" />
                  <p>{dateTime}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
