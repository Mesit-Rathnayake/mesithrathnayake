import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Eye,
  HeartPulse,
  Image as ImageIcon,
  Smartphone,
  Wallet,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

const featuredProjects = [
  {
    title: "Hybrid AI Photo Enhancer",
    category: "AI & Computer Vision",
    status: "In Development",
    statusTone: "amber",
    icon: ImageIcon,
    description:
      "A hybrid image-enhancement application designed to improve photograph quality using a combination of traditional image-processing techniques and artificial intelligence.",
    details:
      "The project explores AI-based upscaling, restoration, noise reduction, sharpening, colour correction, skin-detail enhancement, dynamic-range improvement and realistic depth-of-field effects while preserving natural facial features and the authenticity of the original image.",
    technologies: [
      "Python",
      "OpenCV",
      "PyTorch",
      "Deep Learning",
      "Image Processing",
      "AI Upscaling",
    ],
    highlights: [
      "AI-based image upscaling",
      "Image restoration and enhancement",
      "Natural skin-detail preservation",
      "Realistic depth-of-field effects",
    ],
    repoUrl: "",
    liveUrl: "",
  },
  {
    title: "Classroom Engagement Monitoring System",
    category: "AI & Computer Vision",
    status: "In Development",
    statusTone: "amber",
    icon: Eye,
    description:
      "An intelligent classroom-monitoring system designed to analyse student engagement and provide meaningful insights into attention and participation patterns.",
    details:
      "The system uses computer-vision and machine-learning techniques to identify engagement-related indicators from classroom observations. The project is being developed with consideration for practical educational value, privacy, responsible data handling and ethical AI implementation.",
    technologies: [
      "Python",
      "OpenCV",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Analysis",
    ],
    highlights: [
      "Student engagement analysis",
      "Classroom behaviour monitoring",
      "Engagement pattern identification",
      "Responsible and ethical AI design",
    ],
    repoUrl: "",
    liveUrl: "",
  },
]

const additionalProjects = [
  {
    title: "BudgetBuddy",
    subtitle: "DevOps Engineering Implementation",
    category: "DevOps & Cloud",
    status: "Completed",
    statusTone: "emerald",
    icon: Wallet,
    description:
      "A full-stack budget-management application used as a practical environment for implementing modern DevOps workflows, infrastructure automation and production monitoring.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Jenkins",
      "Terraform",
      "Ansible",
      "AWS EC2",
      "Grafana",
      "Prometheus",
    ],
    contributions: [
      "Designed a Jenkins CI/CD pipeline triggered through GitHub webhooks.",
      "Automated application builds, containerisation and deployment to AWS EC2.",
      "Provisioned infrastructure using Terraform and configured servers using Ansible.",
      "Integrated Grafana, Prometheus and application health-check workflows.",
    ],
    repoUrl: "https://github.com/Mesit-Rathnayake/budgetbuddy.git",
  },
  {
    title: "My Academia",
    subtitle: "Student Progress Tracking System",
    category: "Full-Stack & DevOps",
    status: "Completed",
    statusTone: "emerald",
    icon: BookOpen,
    description:
      "A full-stack web application designed to help students organise modules, manage academic information and monitor their educational progress.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Jenkins",
      "Ubuntu Linux",
    ],
    contributions: [
      "Developed authentication, module management and progress-tracking features.",
      "Containerised the application using Docker.",
      "Automated build and deployment workflows using Jenkins.",
      "Configured a self-hosted Ubuntu server and exposed it through secure tunnelling.",
    ],
    repoUrl: "https://github.com/Mesit-Rathnayake/my_academia.git",
    liveUrl: "",
  },
  {
    title: "MOH Connect",
    subtitle: "Maternal & Child Care Management System",
    category: "Frontend Development",
    status: "In Progress",
    statusTone: "blue",
    icon: HeartPulse,
    description:
      "A role-based healthcare management system designed to support maternal and child healthcare services through a centralised digital platform.",
    technologies: [
      "React.js",
      "JavaScript",
      "React Router",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "REST APIs",
    ],
    contributions: [
      "Developing responsive and reusable React user-interface components.",
      "Supporting role-based authentication and healthcare workflows.",
      "Collaborating with backend developers to integrate REST APIs.",
      "Contributing to Git-based team development and interface planning.",
    ],
    repoUrl: "https://github.com/Mesit-Rathnayake/OHM.git",
    liveUrl: "",
  },
  {
    title: "FoundIT",
    subtitle: "Lost & Found Mobile Application",
    category: "Mobile Development",
    status: "Completed",
    statusTone: "emerald",
    icon: Smartphone,
    description:
      "A mobile application developed to provide a centralised platform for reporting lost items and helping users identify and recover found belongings.",
    technologies: [
      "Kotlin",
      "Android SDK",
      "Firebase",
      "Android Studio",
      "XML",
    ],
    contributions: [
      "Developed core mobile user-interface components.",
      "Integrated Firebase Realtime Database.",
      "Implemented real-time synchronisation and CRUD operations.",
      "Collaborated within a small Android development team.",
    ],
    repoUrl: "https://github.com/Mesit-Rathnayake/FoundIT-Kotlin-.git",
    liveUrl: "",
  },
]

const statusStyles = {
  amber:
    "border-amber-400/20 bg-amber-400/10 text-amber-300",
  emerald:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  blue:
    "border-sky-400/20 bg-sky-400/10 text-sky-300",
}

function StatusBadge({ status, tone }) {
  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
        statusStyles[tone] || statusStyles.amber
      }`}
    >
      {status}
    </span>
  )
}

function ProjectLinks({ repoUrl, liveUrl }) {
  if (!repoUrl && !liveUrl) {
    return (
      <span className="text-sm font-medium text-neutral-600">
        Project details coming soon
      </span>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition hover:text-amber-300"
        >
          <FaGithub size={17} />
          Source Code
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition hover:text-amber-300"
        >
          <ExternalLink size={17} />
          Live Demo
        </a>
      )}
    </div>
  )
}

function TechnologyList({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-neutral-300"
        >
          {technology}
        </span>
      ))}
    </div>
  )
}

function FeaturedProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-amber-400/25 hover:bg-white/[0.045]">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/5 blur-3xl transition duration-500 group-hover:bg-amber-400/10" />

      <div className="relative flex h-full flex-col p-7 sm:p-9">
        <div className="flex items-start justify-between gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
            <Icon size={26} />
          </div>

          <span className="text-sm font-medium text-neutral-700">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
            {project.category}
          </p>

          <StatusBadge
            status={project.status}
            tone={project.statusTone}
          />
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 text-base leading-8 text-neutral-300">
          {project.description}
        </p>

        <p className="mt-4 text-sm leading-7 text-neutral-500">
          {project.details}
        </p>

        <div className="mt-7">
          <h4 className="text-sm font-semibold text-white">
            Key areas
          </h4>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-neutral-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <TechnologyList technologies={project.technologies} />
        </div>

        <div className="mt-auto border-t border-white/10 pt-6">
          <ProjectLinks
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      </div>
    </article>
  )
}

function AdditionalProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.045] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
          <Icon size={22} />
        </div>

        <span className="text-xs font-medium text-neutral-700">
          {String(index + 3).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
          {project.category}
        </p>

        <StatusBadge
          status={project.status}
          tone={project.statusTone}
        />
      </div>

      <h3 className="mt-4 text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-neutral-500">
        {project.subtitle}
      </p>

      <p className="mt-5 text-sm leading-7 text-neutral-400">
        {project.description}
      </p>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white">
          Key contributions
        </h4>

        <ul className="mt-4 space-y-3">
          {project.contributions.map((contribution) => (
            <li
              key={contribution}
              className="flex items-start gap-3 text-sm leading-6 text-neutral-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              {contribution}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <TechnologyList technologies={project.technologies} />
      </div>

      <div className="mt-auto border-t border-white/10 pt-6">
        <ProjectLinks
          repoUrl={project.repoUrl}
          liveUrl={project.liveUrl}
        />
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Selected Projects
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building practical solutions across AI, software engineering
              and DevOps.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
              My projects reflect my experience across artificial intelligence,
              computer vision, full-stack development, cloud infrastructure,
              deployment automation and mobile application development.
            </p>
          </div>

          <a
            href="https://github.com/Mesit-Rathnayake"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-amber-400/40 hover:text-amber-300"
          >
            View GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-16">
          <div className="mb-7 flex items-center gap-4">
            <h3 className="text-xl font-semibold text-white">
              Featured Projects
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-center gap-4">
            <h3 className="text-xl font-semibold text-white">
              Additional Projects
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {additionalProjects.map((project, index) => (
              <AdditionalProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400/10 via-white/[0.03] to-orange-500/10 p-7 sm:p-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                Let&apos;s Connect
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Interested in how these projects were built?
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
                I am always open to discussing artificial intelligence,
                computer vision, software engineering, DevOps, cloud
                technologies and collaborative development opportunities.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-amber-300"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects