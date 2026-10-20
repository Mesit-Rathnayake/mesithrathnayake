import { experience } from "../data/portfolio"
import Section from "./Section"

function Experience() {
  return (
    <Section id="experience" index="05" title="Experience">
      <div className="space-y-10">
        {experience.map(({ when, entries }) => (
          <div key={when}>
            <p className="label mb-4">{when}</p>

            <ul className="glass px-5 md:px-8">
              {entries.map((entry) => (
                <li
                  key={`${entry.role}-${entry.org}`}
                  className="group grid gap-1 border-b border-line py-5 last:border-b-0 md:grid-cols-[9rem_1.3fr_1fr] md:items-baseline md:gap-6"
                >
                  <span className="label">{entry.period}</span>

                  <span className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent">
                    {entry.role}
                  </span>

                  <span className="text-muted">{entry.org}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience