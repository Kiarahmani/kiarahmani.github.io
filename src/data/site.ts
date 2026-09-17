export const profile = {
  name: "Kia Rahmani",
  role: "Member of Technical Staff",
  org: "Math, Inc.",
  orgUrl: "https://math.inc/",
  location: "New York, NY",
  photo: "/profile.jpg",
};

export const links = {
  email: "kia@krahmani.com",
  github: "https://github.com/kiarahmani",
  scholar: "https://scholar.google.com/citations?user=XF7r9VQAAAAJ",
  linkedin: "https://www.linkedin.com/in/kia-rahmani/",
};

export const about = [
  `I work at <a class="ilink" href="https://math.inc/">Math, Inc.</a>, at the intersection of formal verification&nbsp;and&nbsp;AI.`,
  `Before that I spent a few years at a startup building neurosymbolic program synthesizers and LLM agents. I did my Ph.D. at <a class="ilink" href="https://www.cs.purdue.edu/">Purdue</a> and a postdoc at <a class="ilink" href="https://www.cs.utexas.edu/">UT Austin</a>, both in programming languages and formal methods, and spent time at&nbsp;<a class="ilink" href="https://www.microsoft.com/en-us/research/">Microsoft&nbsp;Research</a>.`,
];

export interface ServiceItem {
  year: number;
  venue: string;      // short name shown in the meta line
  name: string;       // full name, shown as the linked title
  role: "Program committee" | "Review committee" | "Reviewer";
  href: string;
}

export const service: ServiceItem[] = [
  {
    year: 2026,
    venue: "OOPSLA",
    name: "ACM Conference on Object-Oriented Programming, Systems, Languages, and Applications",
    role: "Review committee",
    href: "https://2026.splashcon.org/track/oopsla-2026",
  },
  {
    year: 2026,
    venue: "VeriCodeGen @ NeurIPS",
    name: "AI for Verifiable Coding",
    role: "Reviewer",
    href: "https://vericodegen.github.io/",
  },
  {
    year: 2025,
    venue: "ICLR",
    name: "International Conference on Learning Representations",
    role: "Program committee",
    href: "https://iclr.cc/Conferences/2025",
  },
  {
    year: 2025,
    venue: "ICML",
    name: "International Conference on Machine Learning",
    role: "Program committee",
    href: "https://icml.cc/Conferences/2025",
  },
  {
    year: 2024,
    venue: "NeurIPS",
    name: "Conference on Neural Information Processing Systems",
    role: "Program committee",
    href: "https://neurips.cc/Conferences/2024",
  },
  {
    year: 2023,
    venue: "TAHRI",
    name: "International Symposium on Technological Advances in Human-Robot Interaction",
    role: "Program committee",
    href: "https://www.tahri.org/",
  },
  {
    year: 2021,
    venue: "AIPLANS @ NeurIPS",
    name: "Advances in Programming Languages and Neurosymbolic Systems",
    role: "Program committee",
    href: "https://aiplans.github.io/",
  },
  {
    year: 2023,
    venue: "IROS",
    name: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    role: "Program committee",
    href: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/iros",
  },
  {
    year: 2024,
    venue: "IEEE RA-L",
    name: "IEEE Robotics and Automation Letters",
    role: "Reviewer",
    href: "https://www.ieee-ras.org/publications/ra-l",
  },
  {
    year: 2024,
    venue: "DoE SBIR/STTR",
    name: "U.S. Department of Energy SBIR/STTR program",
    role: "Reviewer",
    href: "https://science.osti.gov/sbir",
  },
];
