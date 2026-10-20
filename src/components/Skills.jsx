import { skills } from "../data/portfolio"
import Section from "./Section"

function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <ul className="glass px-5 md:px-8">
        {skills.map(({ group, items }) => (
          <li
            key={group}
            className="grid gap-3 border-b border-line py-5 last:border-b-0 sm:grid-cols-[12rem_1fr]"
          >
            <p className="label pt-1.5">{group}</p>

            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-lg">
              {items.map((item) => (
                <li
                  key={item}
                  className="transition-colors hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills