// Mock data for portfolio

export const personalInfo = {
  name: "William Gatlin",
  title: "AI, ML, & Software Engineer",
  bio: "I bring original thinking to complex problems, turning uncertainty into opportunity.",
  email: "wgatlin18@gmail.com",
  location: "San Diego, CA",
  profileImage: "/profile-picture.jpg",
  social: {
    github: "https://github.com/will-the-g",
    linkedin: "https://www.linkedin.com/in/will-gatlin-614a682b7/",
    twitter: "N/A"
  }
};

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://via.placeholder.com/150/00d9ff/ffffff?text=AWS",
    // Credly embed badge id (from your provided embed snippet)
    embedBadgeId: "53d4f887-0e0e-4179-8f44-fc01f2f8c7b0",
    embedHost: "https://www.credly.com",
    embedWidth: 150,
    embedHeight: 500
  },

  {
    id: 2,
    name: "PyImageSearch University",
    issuer: "PyImageSearch",
    date: "2025",
    image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/145740464",
    url: "https://www.credential.net/profile/willgatlin540613/wallet"
  }
];

export const skills = [
  { name: "Python", category: "Languages" },
  { name: "Typescript", category: "Languages" },
  { name: "Bash", category: "Languages" },
  { name: "R", category: "Languages" },
  { name: "C/C++", category: "Languages" },
  { name: "RAG", category: "ML/AI" },
  { name: "Keras / Tensorflow", category: "ML/AI" },
  { name: "PyTorch", category: "ML/AI" },
  { name: "Langchain/LangGraph", category: "ML/AI" },
  { name: "Pinecone / ChromaDB", category: "ML/AI" },
  { name: "AWS", category: "Cloud & Development" },
  { name: "Docker", category: "Cloud & Development" },
  { name: "Firebase Cloud", category: "Cloud & Development" },
  { name: "git/github", category: "Cloud & Development" },
  { name: "FastAPI", category: "Cloud & Development" },
  { name: "SQL", category: "Data & Databases" },
  { name: "MongoDB", category: "Data & Databases" },
  { name: "FireDB & Storage", category: "Data & Databases" },
  { name: "Pandas / NumPy", category: "Data & Databases" }
];

export const experience = [
  {
    id: 1,
    company: "Chapman University",
    position: "Undergraduate Research Assistant - AI Engineer",
    period: "June 2025 - Present",
    location: "Remote",
    shortDescription: "Allosteric specialized AI Agent System to assist researchers in automating information retrieval, computation, and analysis",
    accomplishments: [
      "Led the design and development of the world’s first end-to-end AI agent system for allosteric research, extending Biomni with 30+ specialized tools, datasets/databases, prompt engineering, and restructuring for specialization ",
      "Built a 20+ prompt evaluation comparing new and baseline systems, measuring error rates/handling, answer structuring, data grounding, and more with documented methodology and results. Public Github release and paper in progress (private demo available upon request). ",
      "Developed scalable system critiquing pipelines to evaluate models and tools across datasets, improving reproducibility, insight generation, and iterative experimentation."
    ],
    technologies: ["Python", "AWS", "APIs", "Docker"],
    highlights: "First Allosteric specialzied AI Agent System to assist researchers"
  },
  {
    id: 2,
    company: "Chapman University",
    position: "Undergraduate Research Assistant - Machine Learning",
    period: "Feb 2025 - Feb 2026",
    location: "Remote",
    shortDescription: "Built scalable ML pipelines to predict maize yield from genetics and environment, using Dockerized HPC workflows and open-source Python/R tools.",
    accomplishments: [
      "Reimplemented a state-of-the-art maize yield prediction pipeline to remove reliance on paid packages, improving accessibility and reproducibility in Python and R",
      "Converted workflow from SLURM to Pegasus WMS with HTCondor for scalable HPC execution",
      "Dockerized the workflow and published the container on Docker Hub, enabling portable, consistent execution"

    ],
    technologies: ["Python", "R", "Bash", "Docker", "Pegasus WMS", "HTCondor"],
    highlights: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Video Search & Q&A Platform",
    description: "This project I aimed to deploy a full stack app on AWS that implemented both a non existant idea and a RAG system. Project Description: Built and deployed a web platform enabling semantic search across YouTube videos, playlists, and channels, returning timestamped video clips for precise topic discovery at yt-timestamp-finder.duckdns.org. Designed a retrieval-augmented generation (RAG) pipeline that converts transcripts into embeddings, performs LLM-driven query expansion, ranking, and context extraction, and produces evidence-grounded answers. Developed multi-user “spaces” for organizing video collections, with role-based access control, Google OAuth authentication, and a production-grade backend including structured logging and persistent storage.",
    technologies: ["Python","FASTAPI", "AWS EC2", "ChromaDB", "Google OAuth", "Gemini", "HTML/CSS/JS"],
    category: ["Deployed Full Stack RAG Website"],
    link: "https://yt-timestamp-finder.duckdns.org/",
    image: "/yt-timestamp.png"
  },
  {
    id: 2,
    title: "State Framework within Agent System",
    description: "This project I aimed to design a state transition framework from scratch that no one has done before and focused on limitations of current systems like cascading hallucinations and lack of validations. Project Description: Designed and built a deterministic state-transition framework for LLM agents to support reliable, multi-step goal execution. Agents generate structured proposals describing explicit state updates using operations, which are validated against invariants and applied in a controlled, versioned runtime with structured logging. Other features include version rollbacks, pinned goals, facts, and tasks, subagent partitions, auto-prompt generation, and more",
    technologies: ["Typescript"],
    category: ["Agentic System Architecture Design"],
    link: "https://github.com/will-the-g/agent_framework/blob/main/state/README.md",
    image: "/state-framework.png"
  },
  {
    id: 3,
    title: "Autofill Medical Form",
    description: "This project I aimed to take my agentic skills and apply it to a real world application while using broswer automation. Project Description: Designed and built a static workflow with guardrails, validations, error handling, and API support to autofill specific medical forms using Playwright. Created an automated test pipeline with results to stress test the system with various prompts like noisy input, scattered data, prompt injection, and more. ",
    technologies: ["Typescript", "Playwright"],
    category: ["Agentic Workflow Backend System"],
    link: "https://github.com/will-the-g/autofill-medforms/tree/main",
    image: "/autofill.png"
  },
  {
    id: 4,
    title: "Skin Cancer Detection CNN Model",
    description: "Built a deep CNN to classify skin images as cancerous vs. non-cancerous, achieving 82% validation accuracy. Compared with transfer learning models and documented techniques, findings, and metrics in a detailed technical report.",
    technologies: ["Python", "Keras", "Tensorflow"],
    category: "Machine Learning",
    link: "https://github.com/will-the-g/CPSC393/tree/main/Homework3_CNN",
    image: "/SkinCNN.png"
  },
  {
    id: 5,
    title: "Crime Data Analysis Project, Los Angeles",
    description: "Collaborated in a team of three to analyze Los Angeles crime data. Applied clustering models, regression analyses, and dimensionality reduction to explore crime patterns and trends. Evaluated model performance to determine the most effective approaches. Specifically researched identifying serial offenders by clustering variables with strict hyperparameters. Compiled a detailed report on methodologies, findings, and model outcomes.",
    technologies: ["Python"],
    category: "Data Science",
    link: "https://github.com/will-the-g/CPSC392/blob/main/FinalProject/CPSC392_FinalProject.ipynb",
    image: "/crime-data-analysis.png"
  },
  {
    id: 6,
    title: "Simple Bank App with MySQL Backend",
    description: "Built a multi-page banking application using Python and Kivy to manage accounts, transactions, statements, and user authentication. Designed and implemented a normalized relational database schema and SQL scripts to support reliable data storage and reproducible test data. Implemented transactional database operations and concurrency-safe updates to preserve data integrity during deposits, transfers, and statement generation. Added CSV-based import/export and reporting capabilities to support audits and data-driven testing.",
    technologies: ["Python", "Kivy", "MySQL"],
    category: [ "App Development, ", "Database Management" ],
    link: "",
  }
  
];