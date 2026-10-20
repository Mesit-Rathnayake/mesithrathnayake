import { about } from "../data/portfolio"
import Section from "./Section"
import Reveal from "./Reveal"

function About() {
  return (
    <Section id="about" index="02" title="About">
      <Reveal>
        <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
          {about.statement}
        </p>
      </Reveal>

      <dl className="glass mt-16 grid grid-cols-3">
        {about.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-r border-line p-5 last:border-r-0 sm:p-8"
          >
            <dt className="label">{stat.label}</dt>
            <dd className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default About