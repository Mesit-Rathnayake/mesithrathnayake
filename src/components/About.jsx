import {
  Code2,
  GraduationCap,
  Palette,
  Users,
} from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Software Engineering",
    description:
      "Experienced in designing and developing reliable software solutions using modern frontend, backend, database, and cloud technologies. I enjoy building maintainable applications, working with APIs, and applying structured engineering practices throughout the development lifecycle.",
  },
  {
    icon: Code2,
    title: "AI & ML",
    description:
      "Focused on developing intelligent systems that transform data into practical solutions. My interests include machine learning, computer vision, image processing, neural networks, and building AI-powered applications that address real-world problems.",
  },
  {
    icon: Palette,
    title: "Creative Technology",
    description:
      "I combine technical problem-solving with creativity through UI design, photography, videography, graphic design, and digital media production. This allows me to build solutions that are not only functional, but also visually engaging and intuitive to use.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "My experience in IEEE, Leo Club, university media, and community volunteering has strengthened my leadership, communication, teamwork, and project-management abilities. I have worked with diverse teams, coordinated events and initiatives, and taken responsibility for guiding projects toward successful outcomes.",
  },
]

const stats = [
  { value: "10+", label: "Technical projects" },
  { value: "4+", label: "Development areas" },
  { value: "5+", label: "Leadership roles" },
  { value: "Always", label: "Learning" },
]

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Engineering with a creative perspective.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-400">
              <p>
                I am a Computer Engineering undergraduate at the
                University of Ruhuna with a strong interest in artificial intelligence,
                software engineering, computer vision, DevOps, and modern web technologies.
                I enjoy turning ideas into practical digital solutions by combining technical
                knowledge, structured problem-solving, and continuous learning.
              </p>

              <p>
                Beyond software development, I am also involved in photography, 
                videography, graphic design, and digital media production. 
                This creative background allows me to approach projects from both 
                technical and visual perspectives, with attention to usability, 
                presentation, and user experience.
              </p>

              <p>
                My leadership and volunteering experiences through IEEE, Leo Club, 
                and university media have also strengthened my communication, 
                teamwork, project coordination, and decision-making abilities. 
                I aim to grow as an engineer who can build reliable, intelligent, 
                and visually thoughtful solutions while contributing effectively to 
                collaborative teams.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full border border-amber-400/40 px-6 py-3 font-semibold text-amber-300 transition hover:border-amber-300 hover:bg-amber-400 hover:text-neutral-950"
            >
              Let&apos;s Work Together
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 text-center sm:p-8 ${
                index !== stats.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              <p className="text-2xl font-bold text-amber-300 sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About