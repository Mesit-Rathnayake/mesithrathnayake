import {
  Brain,
  Eye,
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
} from "lucide-react"

const skillGroups = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "Model Training & Deployment",
      "Data Preprocessing",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    skills: [
      "OpenCV",
      "Image Processing",
      "CNNs",
      "Image Classification",
      "Object Detection",
      "Segmentation",
      "Feature Extraction",
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "JavaScript", "Go", "Java", "C", "C++"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "NestJS", "REST APIs", "JWT", "Prisma"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Jenkins",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "CI/CD",
      "Linux",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Neon",
      "Supabase",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Apache NiFi",
      "Postman",
      "Google Colab",
    ],
  },
]

const featuredSkills = [
  "Artificial Intelligence",
  "Computer Vision",
  "Full-Stack Development",
  "DevOps",
  "Cloud Technologies",
  "Creative Technology",
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Skills & Tools
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I use to turn ideas into working solutions.
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-400 sm:text-lg">
            My experience covers software development, artificial intelligence,
            computer vision, cloud technologies and modern DevOps workflows.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {featuredSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                  <Icon size={21} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400/10 via-white/[0.03] to-orange-500/10 p-7 sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Always learning and experimenting.
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-neutral-400">
                I continuously explore new technologies through university
                projects, personal applications and practical experiments.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex w-fit rounded-full bg-amber-400 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-amber-300"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills