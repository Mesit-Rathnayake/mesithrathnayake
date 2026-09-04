import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "motion/react"
import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
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

function StatusBadge({ status, tone = "amber" }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap ${
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
      <span className="text-xs font-medium text-neutral-600">
        Project details coming soon
      </span>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-neutral-200 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-amber-400/50 hover:bg-amber-400/15 hover:text-amber-300"
        >
          <FaGithub size={15} />
          Source Code
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-neutral-200 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-amber-400/50 hover:bg-amber-400/15 hover:text-amber-300"
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
      )}
    </div>
  )
}

function TechnologyList({ technologies, isActive }) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
            isActive
              ? "border-amber-400/20 bg-amber-400/[0.05] text-neutral-200"
              : "border-white/10 bg-white/[0.02] text-neutral-400"
          }`}
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
          <TechnologyList technologies={project.technologies} isActive={false} />
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

/* ── 3D Additional Projects Carousel (Lightswind 3D Inspired) ─────── */

function AdditionalProjectsCarousel({
  title,
  description,
  projects,
  startIndex,
  autoRotate = true,
  rotateInterval = 6500,
}) {
  const [active, setActive] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const touchStartX = useRef(null)
  const count = projects.length

  const goTo = useCallback((idx) => {
    setActive(idx)
  }, [])

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + count) % count)
  }, [count])

  // Auto-rotate with hover pause
  useEffect(() => {
    if (!autoRotate || isHovering) return
    const id = setInterval(next, rotateInterval)
    return () => clearInterval(id)
  }, [autoRotate, isHovering, next, rotateInterval])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    },
    [prev, next]
  )

  // Touch swipe support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  // 3D placement logic for circular carousel
  const getCardTransform = (index) => {
    const diff = (index - active + count) % count

    // Active Card (Front & Center)
    if (diff === 0) {
      return {
        x: "0%",
        scale: 1,
        rotateY: 0,
        z: 30,
        opacity: 1,
        filter: "brightness(100%) blur(0px)",
        pointerEvents: "auto",
        cursor: "default",
      }
    }

    // Right Card (Next in 3D perspective)
    if (diff === 1) {
      return {
        x: "46%",
        scale: 0.86,
        rotateY: -16,
        z: 15,
        opacity: 0.42,
        filter: "brightness(65%) blur(0.5px)",
        pointerEvents: "auto",
        cursor: "pointer",
      }
    }

    // Left Card (Previous in 3D perspective)
    if (diff === count - 1) {
      return {
        x: "-46%",
        scale: 0.86,
        rotateY: 16,
        z: 15,
        opacity: 0.42,
        filter: "brightness(65%) blur(0.5px)",
        pointerEvents: "auto",
        cursor: "pointer",
      }
    }

    // Distant / Hidden Cards
    return {
      x: "0%",
      scale: 0.7,
      rotateY: 0,
      z: 0,
      opacity: 0,
      filter: "brightness(30%) blur(2px)",
      pointerEvents: "none",
      cursor: "default",
    }
  }

  return (
    <div className="w-full">
      {/* Center-Aligned Section Header */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div
        className="relative mx-auto w-full max-w-5xl py-4 focus:outline-none"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="3d-carousel"
        aria-label={title}
      >
        {/* Navigation Arrow Previous */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute -left-3 sm:-left-6 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/85 text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-400 hover:text-neutral-950 active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Navigation Arrow Next */}
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute -right-3 sm:-right-6 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/85 text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-400 hover:text-neutral-950 active:scale-95"
        >
          <ChevronRight size={22} />
        </button>

        {/* 3D Stack Container */}
        <div className="relative mx-auto flex min-h-[580px] sm:min-h-[500px] w-full items-center justify-center">
          {projects.map((project, index) => {
            const Icon = project.icon
            const transform = getCardTransform(index)
            const isActive = index === active

            return (
              <motion.div
                key={project.title}
                className="absolute top-0 w-full max-w-2xl px-2 sm:px-4"
                animate={{
                  x: transform.x,
                  scale: transform.scale,
                  rotateY: transform.rotateY,
                  zIndex: transform.z,
                  opacity: transform.opacity,
                  filter: transform.filter,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.32, 0.72, 0, 1],
                }}
                onClick={() => {
                  if (!isActive) goTo(index)
                }}
                style={{
                  transformStyle: "preserve-3d",
                  cursor: transform.cursor,
                  pointerEvents: transform.pointerEvents,
                }}
              >
                <article
                  className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                    isActive
                      ? "border-amber-400/30 bg-[#131317] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.12)]"
                      : "border-white/10 bg-[#131317] shadow-2xl hover:border-white/20"
                  }`}
                >
                  {/* Subtle top amber highlight for active card */}
                  {isActive && (
                    <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-2xl" />
                  )}

                  <div>
                    {/* Card Header Row */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300 ${
                            isActive
                              ? "border-amber-400/35 bg-amber-400/15 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                              : "border-white/10 bg-white/[0.04] text-neutral-400"
                          }`}
                        >
                          <Icon size={22} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                            {project.category}
                          </p>
                          <h4 className="mt-1.5 text-xl font-bold text-white sm:text-2xl leading-tight">
                            {project.title}
                          </h4>
                          <p className="mt-1 text-sm text-neutral-400 leading-normal">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Badges and Number in fixed clean row */}
                      <div className="flex shrink-0 items-center gap-2.5 self-start sm:self-auto">
                        <StatusBadge
                          status={project.status}
                          tone={project.statusTone}
                        />
                        <span className="font-mono text-xs text-neutral-600">
                          {String(startIndex + index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-300">
                      {project.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="mt-5">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Key Contributions
                      </h5>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {project.contributions.map((contribution) => (
                          <li
                            key={contribution}
                            className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-neutral-400"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Badges */}
                    <div className="mt-6">
                      <TechnologyList
                        technologies={project.technologies}
                        isActive={isActive}
                      />
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <ProjectLinks
                      repoUrl={project.repoUrl}
                      liveUrl={project.liveUrl}
                    />
                  </div>
                </article>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Center-Aligned Pagination Pills & Counter */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-2 px-4">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`group flex items-center gap-2 rounded-full py-1.5 px-3.5 text-xs transition-all duration-300 ${
                active === idx
                  ? "border border-amber-400/50 bg-amber-400/15 text-amber-300 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                  : "border border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:text-neutral-200"
              }`}
              aria-label={`Select ${proj.title}`}
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "w-4 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                    : "w-1.5 bg-neutral-600 group-hover:bg-neutral-400"
                }`}
              />
              <span className="whitespace-nowrap text-xs">
                {proj.title}
              </span>
            </button>
          ))}
        </div>

        <span className="font-mono text-xs text-neutral-500">
          <span className="font-semibold text-amber-400">
            {String(active + 1).padStart(2, "0")}
          </span>{" "}
          / {String(count).padStart(2, "0")}
        </span>
      </div>
    </div>
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

        {/* Featured Projects Grid */}
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

        {/* Center-Aligned 3D Additional Projects Carousel */}
        <div className="mt-28 border-t border-white/5 pt-20">
          <AdditionalProjectsCarousel
            title="Additional Projects"
            description="Further engineering implementations across DevOps automation, full-stack web platforms, healthcare systems, and mobile applications."
            projects={additionalProjects}
            startIndex={featuredProjects.length}
          />
        </div>

        {/* Bottom Connect Banner */}
        <div className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400/10 via-white/[0.03] to-orange-500/10 p-7 sm:p-10">
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