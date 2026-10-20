import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight, Plus } from "lucide-react"
import { projects } from "../data/portfolio"
import Section from "./Section"

function ProjectRow({ project, number, open, onToggle }) {
  return (
    <li className="border-b border-line transition-opacity duration-300 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group grid w-full cursor-pointer grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-6 text-left md:grid-cols-[4rem_1.4fr_1fr_auto] md:py-8"
      >
        <span className="label">{number}</span>

        <span
          className={`text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 sm:text-4xl lg:text-5xl ${
            open ? "text-accent" : ""
          }`}
        >
          {project.title}
        </span>

        <span className="label hidden md:block">{project.category}</span>

        <Plus
          size={22}
          className={`self-center transition-transform duration-300 ${
            open ? "rotate-45 text-accent" : "text-muted"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pb-10 md:grid-cols-[4rem_1.4fr_1fr_auto]">
              <div className="hidden md:block" />

              <div>
                <p className="label mb-4 md:hidden">{project.category}</p>

                <p className="max-w-2xl text-lg leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-line bg-petrol/20 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-3 md:col-span-2 md:items-end">
                {project.status && (
                  <span className="label flex items-center gap-2 !text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {project.status}
                  </span>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent"
                  >
                    Source
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function Work() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="work" index="01" title="Selected work">
      <div className="glass px-5 md:px-8">
        <ul className="[&:hover>li:not(:hover)]:opacity-40">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              number={String(index + 1).padStart(2, "0")}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Work
