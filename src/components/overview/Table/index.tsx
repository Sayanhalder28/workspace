import styles from "./styles.module.css";

interface Props {
  className: string;
  name: string;
}

function Table({ className , name }: Props) {
  return (
    <div className={className}>
      <div className={styles.table}>
        <div className={styles.heading}>{name}</div>
        <div className={styles.field_names}>Field Names</div>
        <div className={styles.values}>Values</div>
      </div>
    </div>
  );
}

export default Table;
