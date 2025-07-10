import styles from "./styles.module.css";
import { ReactNode } from "react";
import filterIcon from "../../../assets/FilterIcon.svg";
import sortIcon from "../../../assets/SortIcon.svg";

interface Props {
  className: string;
  name: string;
  records: Record<string, any>;
  uniqueFields: Record<string, string[]>;
  icon?: string;
}

function Table({ className, name, records, uniqueFields, icon }: Props) {
  //Note: scanAllFields function should be there in the backend and it should search the entire data set
  function scanAllFields(records: Record<string, any>) {
    // Declear a set
    const allfields: Set<string> = new Set();
    // Search the entire data
    Object.entries(records).forEach(([_recordKey, recordObject]) => {
      Object.keys(recordObject).forEach((key) => {
        allfields.add(key);
      });
    });
    return [...allfields];
  }

  // Function to make individual field columns
  function createColumn(field: string, fieldIndex: number): ReactNode {
    // Iterate over each record and pick the value for the current field
    return Object.entries(records).map(([_recordKey, recordObj], index) => {
      const value = recordObj[field];

      return (
        <div key={index} className={styles.table_value_cell}>
          {fieldIndex == 0 ? <img src={icon} alt="i"></img> : null}
          {value !== undefined ? String(value) : "-"}
        </div>
      );
    });
  }

  function generateTableBody(
    records: Record<string, Record<string, any>>,
    uniqueFields: Record<string, string[]>
  ): ReactNode {
    // scan all field names present in the dataset
    const fieldList = scanAllFields(records);

    // Build column for each field
    const element: ReactNode = fieldList.map((field, index) => {
      const isFilerActive = field in uniqueFields;

      const FieldName = field.replace(/\b\w/g, (char) => char.toUpperCase());

      return (
        <div key={index} className={styles.table_column}>
          <div className={styles.table_heading_cell}>
            {FieldName}
            {isFilerActive ? (
              <img src={filterIcon} alt="filterIcon" />
            ) : (
              <img src={sortIcon} alt="sortIcon" />
            )}
          </div>
          {createColumn(field, index)}
        </div>
      );
    });

    return element;
  }

  return (
    <div className={className}>
      <div className={styles.table}>
        <div className={styles.table_heading}>{name}</div>
        <div className={styles.table_body}>
          {records ? (
            generateTableBody(records, uniqueFields)
          ) : (
            <div> No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;
