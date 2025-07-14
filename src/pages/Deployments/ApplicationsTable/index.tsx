import Table from "../../../components/common/Table";
import {
  ApplicationsRecord,
  ApplicationsRecordUniqueFields,
} from "../../../utils/DummyData";
import AppIcon from "../../../assets/AppIcon.svg";

function ApplicationsTable() {
  return (
    <Table
      name="Applications"
      records={ApplicationsRecord}
      uniqueFields={ApplicationsRecordUniqueFields}
      icon={AppIcon}
      showHeading = {false}
    />
  );
}

export default ApplicationsTable;
