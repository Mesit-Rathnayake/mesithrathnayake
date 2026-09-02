import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Camera,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  GraduationCap,
  Megaphone,
  Users,
} from "lucide-react"

const professionalExperience = [
  {
    icon: BriefcaseBusiness,
    title: "Software Engineer Intern",
    organization: "Botcalm Pvt Ltd",
    period: "2026 — Present",
    type: "Professional Experience",
    status: "Current",
    description:
      "Gaining practical industry experience in software engineering while strengthening my knowledge of software development, Go, blockchain technologies, teamwork and professional engineering workflows.",
    highlights: [
      "Software development",
      "Go programming",
      "Blockchain fundamentals",
      "Professional workflows",
    ],
  },
  {
    icon: GraduationCap,
    title: "Computer Engineering Undergraduate",
    organization: "University of Ruhuna",
    period: "Present",
    type: "Education",
    status: "Current",
    description:
      "Studying Computer Engineering with academic and practical experience across artificial intelligence, software engineering, computer vision, embedded systems, networking, DevOps and cloud technologies.",
    highlights: [
      "Artificial intelligence",
      "Software engineering",
      "Computer vision",
      "Computer systems",
    ],
  },
]

const currentLeadership = [
  {
    icon: CircleDollarSign,
    title: "District Treasurer",
    organization: "Leo District 306 D8",
    period: "Leo Year 2026/27",
    type: "District Leadership",
    status: "Current",
    description:
      "Responsible for supporting district-level financial administration, budgeting, reporting and coordination while working closely with the District President, cabinet officers and Leo clubs.",
    highlights: [
      "Financial management",
      "Budget coordination",
      "District administration",
      "Leadership",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Vice Chair",
    organization:
      "IEEE Computational Intelligence Society Student Branch Chapter — University of Ruhuna",
    period: "Present",
    type: "IEEE Leadership",
    status: "Current",
    description:
      "Supporting the development of the Computational Intelligence Society chapter through technical initiatives, member engagement, event planning and collaboration with the chapter committee.",
    highlights: [
      "Technical initiatives",
      "Member engagement",
      "Event coordination",
      "Committee leadership",
    ],
  },
  {
    icon: Camera,
    title: "Junior Treasurer",
    organization: "REF Media — University of Ruhuna",
    period: "Present",
    type: "Media Leadership",
    status: "Current",
    description:
      "Supporting financial administration and media-team activities while contributing experience in photography, videography, livestream production and event-media coordination.",
    highlights: [
      "Financial administration",
      "Photography",
      "Videography",
      "Media coordination",
    ],
  },
]

const previousLeadership = [
  {
    icon: Users,
    title: "District Director of Member Relations & Fellowship",
    organization: "Leo District 306 D8",
    period: "Leo Year 2025/26",
    type: "District Leadership",
    status: "Previous",
    description:
      "Worked to strengthen member engagement, fellowship and collaboration across the district by supporting activities that encouraged participation, networking and stronger relationships between Leo clubs.",
    highlights: [
      "Member engagement",
      "District fellowship",
      "Club coordination",
      "Event organisation",
    ],
  },
  {
    icon: Megaphone,
    title: "Publicity & Public Visibility Lead",
    organization: "IEEE Student Branch — University of Ruhuna",
    period: "2025/26",
    type: "IEEE Leadership",
    status: "Previous",
    description:
      "Led publicity and public-visibility activities for the main IEEE Student Branch chapter by supporting promotional strategy, digital communication, event visibility and consistent public representation.",
    highlights: [
      "Publicity strategy",
      "Public visibility",
      "Digital communication",
      "Event promotion",
    ],
  },
  {
    icon: Award,
    title: "Club President & Executive Member",
    organization: "Leo Club of Southern Metro",
    period: "2021 — Present",
    type: "Long-Term Volunteering",
    status: "Leadership Journey",
    description:
      "Served in several positions including IT Director, Editorial Director, Assistant Secretary, Vice President, Club President and Immediate Past President while contributing to community-service and youth-development initiatives.",
    highlights: [
      "Club presidency",
      "Project management",
      "Team leadership",
      "Community service",
    ],
  },
]

/* ── Shared sub-components ─────────────────────────────────────────── */

function StatusBadge({ status }) {
  const current = status === "Current"

  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
        current
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
          : "border-white/10 bg-black/20 text-neutral-400"
      }`}
    >
      {status}
    </span>
  )
}

function ExperienceCard({ experience, index }) {
  const Icon = experience.icon

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.05] sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
            <Icon size={22} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
              {experience.type}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {experience.title}
            </h3>

            <p className="mt-1 max-w-xl text-sm leading-6 text-neutral-500">
              {experience.organization}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <StatusBadge status={experience.status} />

          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-neutral-400">
            {experience.period}
          </span>

          <span className="text-xs text-neutral-700">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <p className="mt-6 leading-7 text-neutral-400">
        {experience.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-neutral-300"
          >
            {highlight}
          </span>
        ))}
      </div>
    </article>
  )
}

function ExperienceGroup({ title, description, experiences, startIndex }) {
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-5">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-500">
            {description}
          </p>
        </div>

        <div className="hidden h-px flex-1 bg-white/10 sm:block" />
      </div>

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.title}-${experience.organization}`}
            experience={experience}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  )
}

/* ── 3D Leadership Carousel (Lightswind 3D Inspired) ────────────────── */

function LeadershipCarousel({
  title,
  description,
  experiences,
  startIndex,
  autoRotate = true,
  rotateInterval = 6000,
}) {
  const [active, setActive] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const touchStartX = useRef(null)
  const count = experiences.length

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
          aria-label="Previous card"
          className="absolute -left-3 sm:-left-6 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/85 text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-400 hover:text-neutral-950 active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Navigation Arrow Next */}
        <button
          onClick={next}
          aria-label="Next card"
          className="absolute -right-3 sm:-right-6 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/85 text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-400 hover:text-neutral-950 active:scale-95"
        >
          <ChevronRight size={22} />
        </button>

        {/* 3D Stack Container */}
        <div className="relative mx-auto flex min-h-[440px] sm:min-h-[380px] w-full items-center justify-center">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            const transform = getCardTransform(index)
            const isActive = index === active

            return (
              <motion.div
                key={`${experience.title}-${experience.organization}`}
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
                  className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                    isActive
                      ? "border-amber-400/30 bg-[#131317] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.12)]"
                      : "border-white/10 bg-[#131317] shadow-2xl hover:border-white/20"
                  }`}
                >
                  {/* Subtle top amber highlight for active card */}
                  {isActive && (
                    <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-2xl" />
                  )}

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
                          {experience.type}
                        </p>
                        <h4 className="mt-1.5 text-xl font-bold text-white sm:text-2xl leading-tight">
                          {experience.title}
                        </h4>
                        <p className="mt-1 text-sm text-neutral-400 leading-normal">
                          {experience.organization}
                        </p>
                      </div>
                    </div>

                    {/* Badges and Number in fixed clean row */}
                    <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
                      <StatusBadge status={experience.status} />
                      <span className="whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-neutral-300">
                        {experience.period}
                      </span>
                      <span className="font-mono text-xs text-neutral-600">
                        {String(startIndex + index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-300">
                    {experience.description}
                  </p>

                  {/* Highlight Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                          isActive
                            ? "border-amber-400/20 bg-amber-400/[0.05] text-neutral-200"
                            : "border-white/10 bg-white/[0.02] text-neutral-400"
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
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
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`group flex items-center gap-2 rounded-full py-1.5 px-3.5 text-xs transition-all duration-300 ${
                active === idx
                  ? "border border-amber-400/50 bg-amber-400/15 text-amber-300 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                  : "border border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:text-neutral-200"
              }`}
              aria-label={`Select ${exp.title}`}
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "w-4 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                    : "w-1.5 bg-neutral-600 group-hover:bg-neutral-400"
                }`}
              />
              <span className="whitespace-nowrap text-xs">
                {exp.title}
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

/* ── Main Section ──────────────────────────────────────────────────── */

function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />
      <div className="absolute -left-32 top-[45%] h-96 w-96 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Top Section: Professional & Academic Experience */}
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Experience & Education
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Growing through engineering and education.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
              My engineering journey combines practical software engineering
              internship experience, university academics, and continuous learning in
              modern computing technologies.
            </p>

            <div className="mt-9 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm leading-7 text-neutral-400">
                Building robust backend systems, exploring blockchain architectures, and
                applying core computer engineering principles to real-world software
                challenges.
              </p>
            </div>
          </div>

          <div>
            <ExperienceGroup
              title="Professional & Academic Experience"
              description="My current engineering internship and academic development as a Computer Engineering undergraduate."
              experiences={professionalExperience}
              startIndex={0}
            />
          </div>
        </div>

        {/* Dedicated Middle Section: Center-Aligned 3D Leadership Carousels */}
        <div className="mt-28 border-t border-white/5 pt-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Leadership & Community
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Leading teams, inspiring members & serving communities.
            </h2>

            <p className="mt-5 text-base leading-8 text-neutral-400 sm:text-lg">
              Valuable experience gained through student organizations, district-level
              responsibilities, media production, and volunteering initiatives.
            </p>
          </div>

          <div className="space-y-28">
            <LeadershipCarousel
              title="Current Leadership Roles"
              description="The leadership and organisational responsibilities I currently hold."
              experiences={currentLeadership}
              startIndex={professionalExperience.length}
            />

            <LeadershipCarousel
              title="Previous Leadership Experience"
              description="Previous roles that have shaped my experience in volunteering, communication, teamwork and organisational leadership."
              experiences={previousLeadership}
              startIndex={
                professionalExperience.length +
                currentLeadership.length
              }
            />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-28 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400/10 via-white/[0.03] to-orange-500/10 p-7 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                Beyond Technical Skills
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Engineering experience strengthened by leadership.
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
                My professional, volunteer and media experiences help me
                communicate ideas clearly, collaborate effectively, manage
                responsibilities and approach technical challenges from
                multiple perspectives.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-amber-400 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-amber-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience