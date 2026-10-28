/**
 * Central Portfolio Configuration for Ankush Soni
 * All details, projects, skills, education, and links are easily configurable here.
 */

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'AI & ML' | 'Computer Vision' | 'Web Dev' | 'Tools';
  technologies: string[];
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: string;
  features: string[];
  architectureOverview: string;
  demoType: 'travel' | 'depth' | 'expense' | 'tools';
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    description: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  date: string;
  title: string;
  organization: string;
  type: 'Education' | 'Hackathon' | 'Certification' | 'Project' | 'Internship';
  description: string;
  tags: string[];
  badge?: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Ankush Soni",
    handle: "ankushsonimak",
    roles: [
      "Developer",
      "Data Science Enthusiast",
      "AI/ML Explorer",
      "Full-Stack Builder"
    ],
    status: "AVAILABLE FOR OPPORTUNITIES",
    location: "Global / Remote",
    leadQuote: "I build intelligent applications, experiment with emerging technologies, and transform creative ideas into practical digital experiences.",
    bioLong: "Passionate developer and researcher at the intersection of Artificial Intelligence, Computer Vision, and modern web architectures. Dedicated to building robust software systems, exploring LLM orchestration, and creating intuitive digital products with clean engineering practices.",
    avatarUrl: "/src/assets/images/ankush_avatar_1793165090589.jpg",
    systemStats: {
      latency: "14ms",
      kernel: "ANKUSH-OS v3.2.0-LTS",
      security: "AES-256-GCM / TLS 1.3",
      uptime: "99.98%",
      locationCode: "IN / UTC+5:30",
    }
  },

  socials: {
    github: "https://www.github.com/ankushsonimak",
    linkedin: "https://www.linkedin.com/in/ankushsoni",
    instagram: "https://www.instagram.com/ankushsoni",
    email: "a2482608@gmail.com",
  },

  aboutCards: [
    {
      title: "Current Focus",
      value: "Data Science & AI",
      detail: "Developing predictive modeling pipelines, exploring prompt engineering, and building data-driven decision tools.",
      icon: "Cpu",
      accent: "#00FF88"
    },
    {
      title: "Core Programming",
      value: "Python and C++",
      detail: "Algorithmic problem-solving, performant computation, memory management, and robust backend engineering.",
      icon: "Terminal",
      accent: "#39FF14"
    },
    {
      title: "Exploring",
      value: "Machine Learning & LLMs",
      detail: "Experimenting with multi-agent workflows, diffusion models, computer vision heuristics, and API synthesis.",
      icon: "Sparkles",
      accent: "#00FF88"
    },
    {
      title: "Objective",
      value: "Impactful Digital Products",
      detail: "Delivering real value to users by turning research prototypes into scalable, aesthetically striking web applications.",
      icon: "Rocket",
      accent: "#39FF14"
    }
  ],

  skillCategories: [
    {
      name: "Programming",
      skills: [
        { name: "Python", description: "NumPy, SciPy, AI modeling, automation scripts", icon: "Code" },
        { name: "C++", description: "Object-oriented architecture, STL, algorithms", icon: "Cpu" },
        { name: "Java", description: "Enterprise patterns, multithreading, OOP fundamentals", icon: "Coffee" },
        { name: "JavaScript", description: "Modern ES6+, asynchronous event loop, node runtime", icon: "FileCode" }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "HTML & CSS", description: "Semantic markup, modern layout models, responsive flow", icon: "Layout" },
        { name: "React", description: "Component-driven UI, custom hooks, state orchestration", icon: "Atom" },
        { name: "Tailwind CSS", description: "Utility-first design systems, custom themes, dark glassmorphism", icon: "Palette" },
        { name: "TypeScript", description: "Type safety, generics, interfaces, strict compiler rules", icon: "ShieldCheck" }
      ]
    },
    {
      name: "Data Science",
      skills: [
        { name: "NumPy", description: "High-performance n-dimensional array mathematics", icon: "Binary" },
        { name: "Pandas", description: "DataFrame data wrangling, cleansing & pipeline transformation", icon: "Table" },
        { name: "Matplotlib & Seaborn", description: "Scientific statistical charts, heatmaps, telemetry graphs", icon: "BarChart3" },
        { name: "Scikit-learn", description: "Supervised & unsupervised algorithms, cross-validation", icon: "GitGraph" }
      ]
    },
    {
      name: "Developer Tools",
      skills: [
        { name: "Git", description: "Distributed version control, rebase, branch workflows", icon: "GitBranch" },
        { name: "GitHub", description: "CI/CD actions, pull requests, issue tracking, OSS", icon: "Github" },
        { name: "VS Code", description: "Configured workspace, debugging, linting environments", icon: "FileTerminal" },
        { name: "Linux / Bash", description: "Shell scripting, daemon processes, POSIX utilities", icon: "TerminalSquare" }
      ]
    },
    {
      name: "AI & ML",
      skills: [
        { name: "Machine Learning", description: "Feature engineering, regression, classification, clustering", icon: "Brain" },
        { name: "API Integration", description: "RESTful endpoints, Gemini API, webhook listeners", icon: "Network" },
        { name: "LLM Experimentation", description: "Structured outputs, system prompting, tool-calling pipelines", icon: "Boxes" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "ai-smart-travel-planner",
      title: "AI Smart Travel Planner",
      shortDesc: "Intelligent travel planner generating dynamic itineraries, smart route optimization, and budget forecasting via AI.",
      fullDesc: "A complete autonomous travel companion designed to synthesize flight schedules, hotel recommendations, and day-by-day itineraries based on user constraints, budget caps, and personal interests.",
      category: "AI & ML",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Leaflet/Geo"],
      thumbnail: "/src/assets/images/project_travel_ai_1793165088631.jpg",
      githubUrl: "https://www.github.com/ankushsonimak",
      liveUrl: "https://aether-travel.preview.app",
      featured: true,
      metrics: "94% itinerary planning efficiency gain",
      features: [
        "Real-time route cost & travel time optimization",
        "Multi-city schedule coordination with interactive maps",
        "Dynamic day-by-day activity generation with budget constraints",
        "Exportable PDF/JSON itinerary summary"
      ],
      architectureOverview: "Client-side React interface communicating with structured Gemini generative endpoints. State persistence with localStorage cache and client-side geo calculation.",
      demoType: "travel"
    },
    {
      id: "depth-wizard",
      title: "Depth Wizard — Height Estimation",
      shortDesc: "Computer vision pipeline estimating 3D depth geometry and physical height from single monocular camera inputs.",
      fullDesc: "Depth Wizard uses advanced deep learning vision heuristics to reconstruct depth representations from 2D photos, computing accurate physical height measurements without requiring expensive stereoscopic hardware.",
      category: "Computer Vision",
      technologies: ["Python", "OpenCV", "TensorFlow", "React", "WebGL"],
      thumbnail: "/src/assets/images/project_depth_wizard_1793165089796.jpg",
      githubUrl: "https://www.github.com/ankushsonimak",
      liveUrl: "https://depth-wizard.preview.app",
      featured: true,
      metrics: "±2.4% error rate in controlled environments",
      features: [
        "Monocular depth map synthesis and 3D point cloud generation",
        "Automatic ground plane detection and vertical reference triangulation",
        "Interactive caliper measurement tools on 3D viewports",
        "Real-time webcam telemetry and frame rate diagnostics"
      ],
      architectureOverview: "Python-driven inference backend ported to on-device WebGL shaders for real-time visualization and point cloud manipulation.",
      demoType: "depth"
    },
    {
      id: "gen-z-expense-tracker",
      title: "Gen Z Expense Tracker",
      shortDesc: "Cyber-styled fintech tracker featuring automated category insights, subscription leaks auditor, and split-bill analytics.",
      fullDesc: "A gamified personal finance ledger built with dark glassmorphism. Highlights recurring subscription drains, provides smart budget pacing, and offers instant split-bill calculations for shared apartments and trips.",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide", "Chart.js"],
      thumbnail: "/src/assets/images/project_expense_tracker_1793165090556.jpg",
      githubUrl: "https://www.github.com/ankushsonimak",
      liveUrl: "https://cyber-expense.preview.app",
      featured: true,
      metrics: "$180/mo average subscription leak detected",
      features: [
        "Automated recurring payment detection and cancellation reminders",
        "Cybernetic visual spending gauges with neon warning thresholds",
        "Cryptographic-style bill splitting with shareable receipt URLs",
        "Zero-cloud local encrypted storage for privacy"
      ],
      architectureOverview: "Pure client-side state engine with localStorage cryptographic hashing for bank-level user privacy and zero server footprint.",
      demoType: "expense"
    },
    {
      id: "developer-tools-experiments",
      title: "Developer Tools and Experiments",
      shortDesc: "Suite of lightweight developer utilities: neural weights visualizer, regex debugger, and glassmorphic micro-components.",
      fullDesc: "A modular toolkit curated for software engineers. Includes an in-browser token cost estimator, live neural activation visualizer, shell command cheatsheets, and responsive glass UI building blocks.",
      category: "Tools",
      technologies: ["TypeScript", "Tailwind CSS", "Vite", "Canvas API"],
      thumbnail: "/src/assets/images/project_travel_ai_1793165088631.jpg",
      githubUrl: "https://www.github.com/ankushsonimak",
      liveUrl: "https://dev-tools.preview.app",
      featured: false,
      metrics: "Used by 1,200+ developers monthly",
      features: [
        "Interactive neural activation function playground (ReLU, Sigmoid, GELU)",
        "Regex interactive debugger with syntax highlight",
        "Tailwind glassmorphism CSS generator with copyable snippets",
        "High-performance canvas benchmark harness"
      ],
      architectureOverview: "Zero-dependency modular TypeScript scripts rendered into accessible interactive web widgets.",
      demoType: "tools"
    }
  ] as Project[],

  timeline: [
    {
      id: "edu-btech",
      year: "2023 - 2027",
      date: "August 2023 - Present",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Institute of Technology",
      type: "Education",
      description: "Focusing on Data Structures & Algorithms, Database Management Systems, Machine Learning, and Computer Vision. Maintaining top-tier academic standing.",
      tags: ["Algorithms", "Machine Learning", "Operating Systems", "Computer Architecture"]
    },
    {
      id: "hack-hackoverflow",
      year: "2025",
      date: "October 2025",
      title: "1st Runner Up — National AI Hackathon",
      organization: "HackOverflow 2025",
      type: "Hackathon",
      description: "Designed and built an autonomous emergency response triage assistant leveraging Computer Vision and LLM synthesis under a strict 36-hour sprint.",
      tags: ["FastAPI", "Computer Vision", "Real-Time Triaging", "Gemini API"],
      badge: "Finalist / Top 3"
    },
    {
      id: "cert-deeplearning",
      year: "2024",
      date: "July 2024",
      title: "Machine Learning Specialization",
      organization: "DeepLearning.AI / Coursera",
      type: "Certification",
      description: "Mastered core supervised learning, neural networks, regularizations, tree-based models, and unsupervised anomaly detection pipelines.",
      tags: ["Deep Learning", "NumPy", "TensorFlow", "Math for ML"]
    },
    {
      id: "project-depth",
      year: "2024",
      date: "March 2024",
      title: "Academic Research: Monocular Height Estimation",
      organization: "University Computer Vision Lab",
      type: "Project",
      description: "Published prototype research on estimating vertical spatial heights of humans and obstacles from single focal perspective feeds.",
      tags: ["OpenCV", "Python", "Research Paper", "Point Clouds"]
    },
    {
      id: "intern-dev",
      year: "2023",
      date: "June 2023 - August 2023",
      title: "Software Engineering Intern",
      organization: "Tech Innovators Studio",
      type: "Internship",
      description: "Built modular React frontend dashboards, optimized asset loading by 42%, and automated backend REST API testing workflows with Python.",
      tags: ["React", "Python", "API Testing", "Performance Optimization"]
    }
  ] as TimelineItem[]
};
