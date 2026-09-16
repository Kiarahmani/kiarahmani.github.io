export type PubKind = "conference" | "journal" | "patent" | "thesis";

export interface PubLink {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  authors: string[];      // exact strings; "K. Rahmani" is highlighted automatically
  venue: string;          // short name, shown as the link
  venueName?: string;     // full name, shown after the short one
  venueUrl: string;
  year: number;
  kind: PubKind;
  tags: string[];
  links: PubLink[];
}

export const ME = "K. Rahmani";

export const publications: Publication[] = [
  {
    title: "Dynamic Model Predictive Shielding for Provably Safe Reinforcement Learning",
    authors: ["A. Banerjee", "K. Rahmani", "J. Biswas", "I. Dillig"],
    venue: "NeurIPS",
    venueName: "Conference on Neural Information Processing Systems",
    venueUrl: "https://neurips.cc/Conferences/2024",
    year: 2024,
    kind: "conference",
    tags: ["Safe RL", "Formal Methods"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2405.13863" }],
  },
  {
    title: "Programming-by-Demonstration for Long-Horizon Robot Tasks",
    authors: ["N. Patton", "K. Rahmani", "M. Missula", "J. Biswas", "I. Dillig"],
    venue: "POPL",
    venueName: "Symposium on Principles of Programming Languages",
    venueUrl: "https://popl24.sigplan.org/",
    year: 2024,
    kind: "conference",
    tags: ["Synthesis", "Robotics"],
    links: [
      { label: "ACM", href: "https://dl.acm.org/doi/10.1145/3632860" },
      { label: "pdf", href: "/files/popl24.pdf" },
    ],
  },
  {
    title: "Programmatic Imitation Learning from Unlabeled and Noisy Demonstrations",
    authors: ["J. Xin", "L. Zheng", "K. Rahmani", "J. Wei", "J. Holtz", "I. Dillig", "J. Biswas"],
    venue: "IEEE RA-L",
    venueName: "IEEE Robotics and Automation Letters",
    venueUrl: "https://www.ieee-ras.org/publications/ra-l",
    year: 2024,
    kind: "journal",
    tags: ["Synthesis", "Robotics"],
    links: [
      { label: "IEEE", href: "https://ieeexplore.ieee.org/document/10493855" },
      { label: "project", href: "https://amrl.cs.utexas.edu/plunder" },
      { label: "video", href: "https://youtu.be/Fy1P_46c54A?si=Ji5lmdo3lg6G1H4N" },
      { label: "arXiv", href: "https://arxiv.org/abs/2303.01440" },
    ],
  },
  {
    title: "Multi-modal Program Inference: a Marriage of Large Language Models and Component-based Synthesis",
    authors: ["K. Rahmani", "M. Raza", "S. Gulwani", "V. Le", "D. Morris", "A. Radhakrishna", "G. Soares", "A. Tiwari"],
    venue: "OOPSLA",
    venueName: "Object-Oriented Programming, Systems, Languages, and Applications",
    venueUrl: "https://2021.splashcon.org/track/splash-2021-oopsla",
    year: 2021,
    kind: "conference",
    tags: ["LLM", "Synthesis"],
    links: [
      { label: "ACM", href: "https://dl.acm.org/doi/10.1145/3485535" },
      { label: "arXiv", href: "https://arxiv.org/abs/2109.02445" },
      { label: "pdf", href: "/files/nlx.pdf" },
    ],
  },
  {
    title: "Repairing Serializability Bugs in Distributed Database Programs via Automated Schema Refactoring",
    authors: ["K. Rahmani", "K. Nagar", "B. Delaware", "S. Jagannathan"],
    venue: "PLDI",
    venueName: "Conference on Programming Language Design and Implementation",
    venueUrl: "https://pldi21.sigplan.org/",
    year: 2021,
    kind: "conference",
    tags: ["Databases", "Formal Methods"],
    links: [{ label: "ACM", href: "https://dl.acm.org/doi/10.1145/3453483.3454028" }],
  },
  {
    title: "CLOTHO: Directed Test Generation for Weakly Consistent Database Systems",
    authors: ["K. Rahmani", "K. Nagar", "B. Delaware", "S. Jagannathan"],
    venue: "OOPSLA",
    venueName: "Object-Oriented Programming, Systems, Languages, and Applications",
    venueUrl: "https://2019.splashcon.org/track/splash-2019-oopsla",
    year: 2019,
    kind: "conference",
    tags: ["Databases", "Formal Methods"],
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/1908.05655.pdf" }],
  },
  {
    title: "Multi-modal Program Inference",
    authors: ["K. Rahmani", "M. Raza", "S. Gulwani", "V. Le", "D. Morris", "A. Radhakrishna", "G. Soares", "A. Tiwari"],
    venue: "US Patent US20230176829A1",
    venueUrl: "https://patents.google.com/patent/US20230176829A1/en",
    year: 2023,
    kind: "patent",
    tags: ["LLM", "Synthesis"],
    links: [{ label: "patent", href: "https://patentimages.storage.googleapis.com/0b/de/89/271010060d2ed8/US20230176829A1.pdf" }],
  },
  {
    title: "Symbolic Analysis of Weak Concurrency Semantics in Modern Database Programs",
    authors: ["K. Rahmani"],
    venue: "Ph.D. thesis, Purdue University",
    venueUrl: "https://www.cs.purdue.edu/",
    year: 2022,
    kind: "thesis",
    tags: ["Databases", "Formal Methods"],
    links: [
      { label: "thesis", href: "https://doi.org/10.25394/PGS.20398725.v1" },
      { label: "slides", href: "/files/defense.pdf" },
    ],
  },
];
