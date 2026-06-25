import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Camera,
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

function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Experience & Leadership
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Growing through engineering, leadership and service.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
              My experience combines professional software engineering,
              technical education, organisational leadership, volunteering and
              creative media work.
            </p>

            <div className="mt-9 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm leading-7 text-neutral-400">
                These experiences have strengthened my technical
                problem-solving, communication, teamwork, financial
                responsibility, project coordination and ability to lead
                people across technical, organisational and creative
                environments.
              </p>
            </div>
          </div>

          <div className="space-y-14">
            <ExperienceGroup
              title="Professional & Academic Experience"
              description="My current engineering internship and academic development as a Computer Engineering undergraduate."
              experiences={professionalExperience}
              startIndex={0}
            />

            <ExperienceGroup
              title="Current Leadership Roles"
              description="The leadership and organisational responsibilities I currently hold."
              experiences={currentLeadership}
              startIndex={professionalExperience.length}
            />

            <ExperienceGroup
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

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400/10 via-white/[0.03] to-orange-500/10 p-7 sm:p-10">
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