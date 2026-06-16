// ============================================================
// CV DATA
// ============================================================
// Edit the arrays below to match your own CV.
// Each section will render automatically on the /cv page.

export const cv = {
  // ----- EDUCATION -----
  education: [
    {
      degree: "MSc in Computer Science",
      school: "University of Copenhagen",
      location: "Copenhagen, Denmark",
      period: "2022 – 2024",
      details: "Thesis: Distributed Consensus in Edge Computing Environments",
    },
    {
      degree: "BSc in Computer Science",
      school: "University of Copenhagen",
      location: "Copenhagen, Denmark",
      period: "2019 – 2022",
      details: "Focus on algorithms, data structures, and software engineering",
    },
  ],

  // ----- WORK EXPERIENCE -----
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Unity Technologies",
      location: "Copenhagen, Denmark",
      period: "Jun 2023 – Aug 2024",
      bullets: [
        "Developed tooling to improve the CI/CD pipeline, reducing deployment time by 30%",
        "Contributed to the runtime performance team with profiling and optimization work",
        "Mentored two summer interns through a structured onboarding program",
      ],
    },
    {
      role: "Student Teaching Assistant",
      company: "University of Copenhagen",
      location: "Copenhagen, Denmark",
      period: "Sep 2022 – Jun 2023",
      bullets: [
        "Led weekly exercise sessions for the Distributed Systems course",
        "Developed automated grading tools used by 150+ students",
      ],
    },
  ],

  // ----- SKILLS -----
  skills: [
    {
      category: "Programming Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "Java", "C#"],
    },
    {
      category: "Web & Backend",
      items: ["React", "Node.js", "Express", "Astro", "REST APIs", "gRPC"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "SQLite", "Redis"],
    },
  ],

  // ----- TOOLS & TECHNOLOGIES -----
  tools: [
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    },
    {
      category: "Development Tools",
      items: ["Git", "VS Code", "Figma", "Postman", "Linux"],
    },
  ],

  // ----- CERTIFICATIONS (optional) -----
  certifications: [
    {
      name: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: 2024,
    },
  ],

  // ----- LANGUAGES -----
  languages: [
    { language: "Danish", level: "Native" },
    { language: "English", level: "Professional (IELTS 8.0)" },
  ],
};
