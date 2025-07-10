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
    status: "<div>abc<div/>",
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
  tags: ["critical", "frontend", "backend"],
};

export const dummyMassageData: Record<string, string> = {
  "2024-01-01 10:00":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "2024-01-01 10:30":
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "2024-01-02 11:00":
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "2024-01-02 11:45":
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "2024-01-03 12:15":
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "2024-01-03 13:00":
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  "2024-01-04 14:00":
    "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "2024-01-04 14:30":
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  "2024-01-05 15:00":
    "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  "2024-01-05 15:45":
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  "2024-01-06 16:00": "Nisi ut aliquid ex ea commodi consequatur?",
  "2024-01-06 16:30":
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  "2024-01-07 17:00":
    "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "2024-01-07 17:45":
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  "2024-01-08 18:00":
    "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
};
