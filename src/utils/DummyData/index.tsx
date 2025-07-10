interface applicationsRecordType {
  [key: string]: {
    id: string;
    type: string;
    cpu: number;
    memory: number;
    status: string;
    location?: string;
    admin?: string;
    tags?: string[];
  };
}

export const ApplicationsReecord: applicationsRecordType = {
  "id-001": {
    id: "id-001",
    type: "prod",
    cpu: 78,
    memory: 64,
    status: "running",
    location: "India",
    tags: ["critical", "frontend"],
  },
  "id-002": {
    id: "id-002",
    type: "dev",
    cpu: 55,
    memory: 32,
    status: "stopped",
    admin: "Alice",
  },
  "id-003": {
    id: "id-003",
    type: "qa",
    cpu: 63,
    memory: 48,
    status: "running",
    location: "US",
    admin: "Bob",
  },
  "id-004": {
    id: "id-004",
    type: "prod",
    cpu: 90,
    memory: 128,
    status: "error",
    tags: ["backend"],
  },
  "id-005": {
    id: "id-005",
    type: "dev",
    cpu: 42,
    memory: 16,
    status: "stopped",
  },
};

// this will help to filter options iin table fields
export const ApplicationsRecordUniqueFields: Record<string, string[]> = {
  type: ["prod", "dev", "qa"],
  status: ["running", "stopped", "error"],
  location: ["India", "US"],
  owner: ["Alice", "Bob"],
  tags: ["critical", "frontend", "backend"],
};
