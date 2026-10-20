export const profile = {
  name: "Mesith Rathnayake",
  headline:
    "Computer Engineering undergraduate building AI, computer vision and full-stack software.",
  now: "AI Engineer Intern, SLT Digital Lab",
  location: "Sri Lanka",
  timezone: "Asia/Colombo",
  email: "mesithrathnayake0930@gmail.com",
  github: "https://github.com/Mesit-Rathnayake",
  githubUser: "Mesit-Rathnayake",
  linkedin: "https://www.linkedin.com/in/mesith-rathnayake-37647a213/",
  cv: "/Mesith-Rathnayake-CV.pdf",
}

export const about = {
  statement:
    "Computer Engineering undergraduate at the University of Ruhuna. I build intelligent software across AI, computer vision and full-stack web, and ship it with proper DevOps. Outside the editor: photography, video and design, plus leading IEEE, Leo and campus media teams.",
  stats: [
    { value: "10+", label: "Projects" },
    { value: "4+", label: "Domains" },
    { value: "5+", label: "Leadership roles" },
  ],
}

export const projects = [
  {
    title: "AI Photo Enhancer",
    category: "Deep Learning / Computer Vision",
    description:
      "Hybrid restoration pipeline combining Real-ESRGAN, GFPGAN and Restormer with custom OpenCV modules. FastAPI backend with tiled GPU inference and a React + TypeScript before/after UI.",
    stack: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "TypeScript"],
    repo: "",
  },
  {
    title: "My Academia",
    category: "AI Academic System",
    description:
      "RAG assistant for academic Q&A and quiz generation over uploaded documents using PyMuPDF, ChromaDB and Gemini. Dockerised full-stack app with Jenkins CI/CD.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Node.js",
      "MongoDB",
      "ChromaDB",
      "Docker",
      "Jenkins",
    ],
    repo: "https://github.com/Mesit-Rathnayake/my_academia.git",
  },
  {
    title: "BudgetBuddy",
    category: "DevOps / Cloud",
    description:
      "Budget manager built to practise the full DevOps loop: Jenkins CI/CD from GitHub webhooks, Terraform and Ansible provisioning on AWS EC2, Grafana and Prometheus monitoring.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
      "Jenkins",
      "Terraform",
      "Ansible",
      "AWS",
      "Grafana",
      "Prometheus",
    ],
    repo: "https://github.com/Mesit-Rathnayake/budgetbuddy.git",
  },
  {
    title: "Classroom Engagement Monitoring",
    category: "AI / Computer Vision",
    description:
      "Estimates student attention from facial landmarks using Eye Aspect Ratio and head pose, with a live Streamlit dashboard.",
    stack: ["Python", "OpenCV", "dlib", "Streamlit", "NumPy", "SciPy"],
    repo: "",
  },
  {
    title: "MOH Connect",
    category: "Healthcare Platform / Group project",
    status: "In progress",
    description:
      "Role-based maternal and child healthcare management system. I build the frontend UI and integrate the REST APIs.",
    stack: ["React", "Tailwind CSS", "React Router", "REST APIs"],
    repo: "https://github.com/Mesit-Rathnayake/OHM.git",
  },
  {
    title: "FoundIT",
    category: "Mobile / Android",
    description:
      "Lost-and-found Android app with real-time sync and CRUD on Firebase Realtime Database.",
    stack: ["Kotlin", "Android SDK", "Firebase"],
    repo: "https://github.com/Mesit-Rathnayake/FoundIT-Kotlin-.git",
  },
]

export const skills = [
  {
    group: "AI & ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    group: "Computer Vision",
    items: [
      "OpenCV",
      "Image Processing",
      "CNNs",
      "Object Detection",
      "Segmentation",
    ],
  },
  {
    group: "Languages",
    items: ["Python", "JavaScript", "Go", "Java", "C", "C++"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "JWT", "Prisma"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Jenkins", "Kubernetes", "GitHub Actions", "AWS", "Linux"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Neon", "Supabase"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Apache NiFi", "Postman", "Google Colab"],
  },
]

export const experience = [
  {
    when: "Now",
    entries: [
      {
        role: "AI Engineer Intern",
        org: "SLT Digital Lab",
        period: "2026 — Present",
      },
      {
        role: "District Treasurer",
        org: "Leo District 306 D8",
        period: "2026/27",
      },
      {
        role: "Vice Chair",
        org: "IEEE CIS Student Branch, University of Ruhuna",
        period: "Present",
      },
      {
        role: "Junior Treasurer",
        org: "REF Media, University of Ruhuna",
        period: "Present",
      },
      {
        role: "Computer Engineering Undergraduate",
        org: "University of Ruhuna",
        period: "Present",
      },
    ],
  },
  {
    when: "Earlier",
    entries: [
      {
        role: "Software Engineer Intern",
        org: "Botcalm Pvt Ltd",
        period: "2026",
      },
      {
        role: "District Director, Member Relations & Fellowship",
        org: "Leo District 306 D8",
        period: "2025/26",
      },
      {
        role: "Publicity & Public Visibility Lead",
        org: "IEEE Student Branch, University of Ruhuna",
        period: "2025/26",
      },
      {
        role: "Club President & Executive Member",
        org: "Leo Club of Southern Metro",
        period: "2021 — Present",
      },
    ],
  },
]
