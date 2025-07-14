import Table from "../../../components/common/Table";
import {
  ClusterRecord,
  ClusterRecordUniqueFields,
} from "../../../utils/DummyData";
import ClusterIcon from "../../../assets/ClusterIcon.svg";

function ClustersTable() {
  return (
    <Table
      name="Applications"
      records={ClusterRecord}
      uniqueFields={ClusterRecordUniqueFields}
      icon={ClusterIcon}
      showHeading={false}
    />
  );
}

export default ClustersTable;
