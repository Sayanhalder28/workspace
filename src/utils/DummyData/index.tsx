// Applications Dummy Data_____________________________
/*
 */
interface applicationsRecordType {
  [key: string]: {
    id: string;
    type: "prod" | "dev" | "qa";
    cpu: number;
    memory: number;
    status: "running" | "down" | "Debugging";
    location?: string;
    admin?: string;
    tags?: string[];
  };
}

export const ApplicationsRecord: applicationsRecordType = {
  "app-001": {
    id: "app-001",
    type: "prod",
    cpu: 85,
    memory: 64,
    status: "running",
    location: "India",
    admin: "Alice",
    tags: ["critical", "backend"],
  },
  "app-002": {
    id: "app-002",
    type: "dev",
    cpu: 40,
    memory: 32,
    status: "Debugging",
    admin: "Bob",
    tags: ["frontend"],
  },
  "app-003": {
    id: "app-003",
    type: "qa",
    cpu: 65,
    memory: 48,
    status: "running",
    location: "US",
    tags: ["critical", "test-suite"],
  },
  "app-004": {
    id: "app-004",
    type: "prod",
    cpu: 92,
    memory: 128,
    status: "down",
    location: "India",
    tags: ["backend"],
  },
  "app-005": {
    id: "app-005",
    type: "dev",
    cpu: 30,
    memory: 16,
    status: "Debugging",
  },
};

// this will help to filter options iin table fields
export const ApplicationsRecordUniqueFields: Record<string, string[]> = {
  type: ["prod", "dev", "qa"],
  status: ["running", "down", "Debugging"],
  location: ["India", "US"],
  tags: ["critical", "frontend", "backend", "test-suite"],
};

// Cluster Dummy Data_____________________________
/*
 */
interface clusterRecordType {
  [key: string]: {
    id: string;
    name: string;
    region: string;
    nodeCount: number;
    status: "active" | "inactive" | "maintenance";
    manager?: string;
    tags?: string[];
  };
}

export const ClusterRecord: clusterRecordType = {
  "cluster-001": {
    id: "cluster-001",
    name: "Alpha Cluster",
    region: "us-east",
    nodeCount: 5,
    status: "active",
    manager: "John Doe",
    tags: ["high-availability", "kubernetes"],
  },
  "cluster-002": {
    id: "cluster-002",
    name: "Beta Cluster",
    region: "eu-west",
    nodeCount: 3,
    status: "maintenance",
    tags: ["legacy"],
  },
  "cluster-003": {
    id: "cluster-003",
    name: "Gamma Cluster",
    region: "ap-south",
    nodeCount: 8,
    status: "active",
    manager: "Emily",
  },
  "cluster-004": {
    id: "cluster-004",
    name: "Delta Cluster",
    region: "us-west",
    nodeCount: 2,
    status: "inactive",
  },
  "cluster-005": {
    id: "cluster-005",
    name: "Epsilon Cluster",
    region: "us-east",
    nodeCount: 4,
    status: "maintenance",
    manager: "Zane",
    tags: ["test", "legacy"],
  },
  "cluster-006": {
    id: "cluster-006",
    name: "Zeta Cluster",
    region: "eu-west",
    nodeCount: 6,
    status: "active",
    tags: ["kubernetes"],
  },
  "cluster-007": {
    id: "cluster-007",
    name: "Theta Cluster",
    region: "ap-south",
    nodeCount: 9,
    status: "inactive",
    manager: "Lara",
    tags: ["experimental"],
  },
  "cluster-008": {
    id: "cluster-008",
    name: "Omega Cluster",
    region: "us-west",
    nodeCount: 7,
    status: "active",
    manager: "Noah",
    tags: ["high-availability"],
  },
  "cluster-009": {
    id: "cluster-009",
    name: "Nova Cluster",
    region: "ap-south",
    nodeCount: 10,
    status: "maintenance",
    manager: "Aisha",
    tags: ["critical", "legacy"],
  },
};

export const ClusterRecordUniqueFields: Record<string, string[]> = {
  region: ["us-east", "eu-west", "ap-south", "us-west"],
  status: ["active", "inactive", "maintenance"],
  tags: [
    "high-availability",
    "kubernetes",
    "legacy",
    "test",
    "experimental",
    "critical",
  ],
};

// server Dummy Data_____________________________
/*
 */
interface serverRecordType {
  [key: string]: {
    id: string;
    hostname: string;
    ip: string;
    os: string;
    uptimeDays: number;
    role: "database" | "application" | "load-balancer";
    status: "online" | "offline" | "restarting";
    datacenter?: string;
    tags?: string[];
  };
}

export const ServerRecord: serverRecordType = {
  "srv-001": {
    id: "srv-001",
    hostname: "db-main-1",
    ip: "10.0.0.1",
    os: "Ubuntu 22.04",
    uptimeDays: 152,
    role: "database",
    status: "online",
    datacenter: "India-DC",
    tags: ["primary", "critical"],
  },
  "srv-002": {
    id: "srv-002",
    hostname: "app-node-3",
    ip: "10.0.0.45",
    os: "CentOS 8",
    uptimeDays: 89,
    role: "application",
    status: "offline",
  },
  "srv-003": {
    id: "srv-003",
    hostname: "lb-gateway",
    ip: "10.0.0.100",
    os: "Alpine 3.17",
    uptimeDays: 200,
    role: "load-balancer",
    status: "online",
    datacenter: "US-DC",
  },
  "srv-004": {
    id: "srv-004",
    hostname: "app-node-5",
    ip: "10.0.0.87",
    os: "Debian 11",
    uptimeDays: 30,
    role: "application",
    status: "restarting",
    tags: ["dev"],
  },
  "srv-005": {
    id: "srv-005",
    hostname: "app-node-5",
    ip: "10.0.0.59",
    os: "Debian 11",
    uptimeDays: 89,
    role: "application",
    status: "offline",
  },
};

export const ServerRecordUniqueFields: Record<string, string[]> = {
  os: ["Ubuntu 22.04", "CentOS 8", "Alpine 3.17", "Debian 11"],
  role: ["database", "application", "load-balancer"],
  status: ["online", "offline", "restarting"],
  datacenter: ["India-DC", "US-DC"],
  tags: ["primary", "critical", "dev"],
};

// Warning Dummy Data_____________________________
/*
 */
export const WarningMessageData: Record<string, string> = {
  "2024-01-01 09:15": "CPU usage exceeded 85% on node-3.",
  "2024-01-02 10:45": "Disk space below 10% on server db-main-1.",
  "2024-01-03 14:30": "Unusual network activity detected in cluster Alpha.",
  "2024-01-04 12:00": "Application service restarted unexpectedly.",
  "2024-01-05 16:00": "Memory usage high on app-node-5.",
  "2024-01-06 11:30": "Login failure threshold reached for admin account.",
  "2024-01-07 18:45": "Cluster Beta moved to maintenance mode.",
  "2024-01-08 08:15": "Database response time above acceptable threshold.",
  "2024-01-08 11:00": "Multiple 500 errors detected on frontend.",
  "2024-01-09 13:30": "Backup process delayed due to network latency.",
};

// Recent Logs Dummy Data_____________________________
/*
 */
export const RecentLogData: Record<string, string> = {
  "2024-01-08 10:00": "User Alice deployed new version of service A.",
  "2024-01-08 10:15": "Container restart triggered on node-7.",
  "2024-01-08 11:00": "Health check passed for all critical services.",
  "2024-01-08 12:30": "Log rotation completed on all servers.",
  "2024-01-08 14:00": "New cluster configuration applied to Gamma Cluster.",
  "2024-01-08 15:45": "Bob assigned role 'read-only' to QA testers.",
  "2024-01-08 16:10": "Service X scaled up from 3 to 6 instances.",
  "2024-01-08 17:00": "SSL certificate renewed for api.domain.com.",
  "2024-01-08 17:45":
    "Security patch installed on all staging servers. Plese restart the server",
  "2024-01-08 18:30": "Monitoring alert cleared: memory pressure resolved.",
};
