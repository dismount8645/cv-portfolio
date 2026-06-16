// ============================================================
// PROJECTS DATA
// ============================================================
// Each object in the array becomes a card on the /projects page.
// Add, remove, or edit entries below to match your own projects.

export const projects = [
  {
    title: "Distributed Task Scheduler",
    description:
      "A fault-tolerant task scheduler for edge computing environments. Supports dynamic worker discovery, failure recovery, and priority-based scheduling.",
    role: "Lead Developer (3-person team)",
    period: "Spring 2024",
    technologies: ["Go", "gRPC", "etcd", "Docker", "Kubernetes"],
    links: {
      github: "https://github.com/yourusername/task-scheduler",
      report: "https://github.com/yourusername/task-scheduler/report.pdf",
    },
  },
  {
    title: "Compiler for a Minimal Language",
    description:
      "A lexer, parser, and code generator for a small imperative language, targeting x86-64 assembly. Built from scratch as part of a compiler design course.",
    role: "Solo project",
    period: "Fall 2023",
    technologies: ["Rust", "LLVM", "x86 Assembly"],
    links: {
      github: "https://github.com/yourusername/mini-compiler",
      report: "https://github.com/yourusername/mini-compiler/report.pdf",
    },
  },
  {
    title: "Real-time Collaborative Editor",
    description:
      "A browser-based collaborative text editor using CRDTs for conflict-free replication. Supports multiple cursors and offline editing.",
    role: "Co-developer (2-person team)",
    period: "Spring 2023",
    technologies: ["TypeScript", "React", "Node.js", "WebSocket", "Y.js"],
    links: {
      github: "https://github.com/yourusername/collab-editor",
      demo: "https://collab-editor.example.com",
    },
  },
  {
    title: "Weather Data Pipeline",
    description:
      "An ETL pipeline that ingests weather station data, processes it with Apache Beam, and visualizes trends in a dashboard.",
    role: "Individual project",
    period: "Fall 2022",
    technologies: ["Python", "Apache Beam", "Google Cloud Pub/Sub", "BigQuery", "Looker"],
    links: {
      github: "https://github.com/yourusername/weather-pipeline",
    },
  },
];
