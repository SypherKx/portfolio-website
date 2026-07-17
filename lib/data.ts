export const NAV = ['Index', 'Work', 'About', 'Skills', 'Contact'];

export const TITLES = ['Developer', 'Data Analyst', 'ML Engineer'];

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  n: string;
  name: string;
  year: string;
  role: string;
  desc: string;
  stack: string[];
  link?: string;
  links?: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    n: '01', name: 'Global Sales Dashboard', year: '2024', role: 'Data / BI',
    desc: 'An interactive Power BI dashboard tracking global sales metrics, regional performance, and revenue forecasting with dynamic data modeling.',
    stack: ['Power BI', 'DAX', 'Data Modeling', 'SQL']
  },
  {
    n: '02', name: 'InsightForge AI', year: '2024', role: 'AI / RAG App',
    desc: 'This is my very first project exploring RAG (Retrieval-Augmented Generation)! I built this platform to learn how to connect statistical anomaly detection with LLMs and custom knowledge bases.',
    stack: ['Python', 'LangChain', 'Vector Database', 'LLMs']
  },
  {
    n: '03', name: 'NutraHire', year: '2024', role: 'AI / LLM App',
    desc: 'An intelligent, serverless resume screening platform that parses PDFs and instantly ranks candidates using Groq API (Llama-3.3-70B) and a Flask backend.',
    stack: ['Python', 'Flask', 'LLM'],
    links: [
      { label: 'Live Project', url: 'https://nutrahire.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/SypherKx/NutraHire-AI-Resume-Screening-System' }
    ]
  },
  {
    n: '04', name: 'Ignitia & Footprints 2K26', year: '2024', role: 'Full-Stack / Web Lead',
    desc: 'Led full-stack development of official platforms for IGNITIA and FOOTPRINTS. Managed systems for 17,000+ users, integrated payment gateways with 98% success, and optimized performance via Cloudflare.',
    stack: ['JavaScript', 'TailwindCSS', 'Framer Motion', 'Cloudflare'],
    links: [
      { label: 'Ignitia ↗', url: 'https://www.ignitia.in/' },
      { label: 'Footprints ↗', url: 'https://footprints.ignitia.in' },
      { label: 'GitHub (Footprints)', url: 'https://github.com/SypherKx/Footprints2K26-event-' }
    ]
  },
  {
    n: '05', name: 'CardSentinel', year: '2024', role: 'Fintech / Fraud Detection',
    desc: 'An AI-powered, real-time credit card fraud detection engine built with a Logistic Regression ML model and a modern Flask Web UI featuring glassmorphism design.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Machine Learning'],
    link: 'https://card-sentinel.vercel.app'
  },
  {
    n: '06', name: 'Aether Eye', year: '2024', role: 'AI / Computer Vision',
    desc: 'A real-time object detection pipeline built on YOLOv8 + OpenCV. Tracks, classifies and reports across live video streams with millisecond inference.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
    links: [
      { label: 'GitHub', url: 'https://github.com/AetherEye/AetherEye' }
    ]
  },
  {
    n: '07', name: 'S&P 500 Predictor', year: '2023', role: 'Quant / Time Series',
    desc: 'A quantitative engine forecasting S&P 500 movements via LSTM and technical indicators. Backtested strategies with risk-adjusted Sharpe optimization.',
    stack: ['Python', 'TensorFlow', 'Pandas', 'Tableau'],
    links: [
      { label: 'Live Project', url: 'https://pricecast.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/SypherKx/SP500-Stock-Price-Prediction' }
    ]
  }
];

export interface TimelineItem {
  y: string;
  t: string;
  o: string;
  d: string | string[];
}

export const TIMELINE: TimelineItem[] = [
  { 
    y: '2026', 
    t: 'Website Co-Head', 
    o: 'PSIT Ignitia & Footprints 2K26', 
    d: 'Led full-stack development and tech teams for PSIT\'s official fest platforms. Engineered scalable systems for 17,000+ users, integrated payment gateways, and maintained 99.9% uptime via Cloudflare.'
  },
  { y: '2024 - 25', t: 'Head, Technical Design & Development', o: 'PSIT Sports Club', d: 'Owning the digital identity of the club. Branding systems, web rollouts, and registration platforms for on-campus tournaments and student events.' },
  { y: '2023 - 27', t: 'B.Tech, Information Technology', o: 'Pranveer Singh Institute of Technology', d: 'Pursuing IT with a sharp focus on Data Analytics, Machine Learning and AI Tools & Workflows. Active in coding contests and open-source.' }
];

export type SkillCategory = [string, string[]];

export const SKILLS: SkillCategory[] = [
  ['Data Science & ML', ['Scikit-learn', 'Pandas', 'NumPy', 'YOLO', 'OpenCV', 'Prophet', 'Random Forest', 'EDA']],
  ['Data Visualization', ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Google Data Analytics']],
  ['Languages & Databases', ['Python', 'SQL', 'Java', 'C++', 'C']],
  ['Web & Tools', ['Streamlit', 'AWS', 'Git/GitHub', 'Jupyter Notebooks']],
  ['Domain Knowledge', ['Workflow Automation', 'AI Strategy', 'Systems Design', 'Data Architecture']]
];

export type Certification = [string, string];

export const CERTS: Certification[] = [
  ['Google Data Analytics Professional Certificate', 'Coursera · Google'],
  ['How Software Ate Finance', 'Stanford University'],
  ['Financial Markets', 'Yale University'],
  ['Full Stack Development', 'Udemy']
];
