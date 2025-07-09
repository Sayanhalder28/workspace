import styles from "./styles.module.css";
import { ReactNode } from "react";

interface Props {
  className: string;
  name: string;
  record: { [key: string]: {} };
  uniqueFields: { [key: string]: string[] };
  fieldMap: string[];
}

function Table({ className, name, record, uniqueFields, fieldMap }: Props) {
  const allfields: Set<string> = new Set();

  function scanAllFields(record: Props["record"]) {
    Object.entries(record).forEach((row) => {
      Object.keys(row[1]).forEach((key) => {
        allfields.add(key);
      });
    });
  }

  scanAllFields(record);

  function generateTableBody(): ReactNode {
    const fieldList = [...allfields];

    const element: ReactNode = fieldList.map((field, index) => {
      return (
        <div key={index} className={styles.table_column}>
          <div className={styles.table_column_field}>{field}</div>
        </div>
      );
    });

    return element;
  }

  return (
    <div className={className}>
      <div className={styles.table}>
        <div className={styles.table_heading}>{name}</div>
        <div className={styles.table_body}>{generateTableBody()}</div>
      </div>
    </div>
  );
}

export default Table;
