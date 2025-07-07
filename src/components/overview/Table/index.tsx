import styles from "./styles.module.css";

interface Props {
  style: String;
}

function Table({ style }: Props) {
  return (
    <div className={`${styles.container} ${style}`}>
      <div className={styles.table}>
        <div className={styles.heading}>Heading</div>
        <div className={styles.field_names}>Field Names</div>
        <div className={styles.values}>Values</div>
      </div>
    </div>
  );
}

export default Table;
