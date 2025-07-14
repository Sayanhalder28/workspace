import Table from "../../../components/common/Table";
import {
  ServerRecord,
  ServerRecordUniqueFields,
} from "../../../utils/DummyData";
import ServerIcon from "../../../assets/ServerIcon.svg";

function ServersTable() {
  return (
    <Table
      name="ServersTable"
      records={ServerRecord}
      uniqueFields={ServerRecordUniqueFields}
      icon={ServerIcon}
      showHeading={false}
    />
  );
}

export default ServersTable;
