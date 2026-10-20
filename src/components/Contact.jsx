import { ArrowUpRight, Download } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { profile } from "../data/portfolio"
import { downloadCV } from "../utils/download"
import Section from "./Section"
import Reveal from "./Reveal"

const links = [
  {
    name: "GitHub",
    href: profile.github,
    icon: FaGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    name: "Download CV",
    href: profile.cv,
    icon: Download,
    download: true,
    filename: "Mesith-Rathnayake-CV.pdf",
  },
]

function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <Reveal>
        <p className="label">Open to opportunities and collaborations</p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-5 flex items-start gap-3 break-all text-[clamp(1.5rem,4.2vw,3.75rem)] font-semibold leading-tight tracking-tight transition-colors hover:text-accent"
        >
          {profile.email}
          <ArrowUpRight
            className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            size={36}
          />
        </a>
      </Reveal>

      <ul className="glass mt-16 px-5 md:px-8">
        {links.map(({ name, href, icon: Icon, external, download, filename }) => (
          <li key={name} className="border-b border-line last:border-b-0">
            <a
              href={href}
              target={download || external ? "_blank" : undefined}
              rel={download || external ? "noopener noreferrer" : undefined}
              download={download ? filename || "Mesith-Rathnayake-CV.pdf" : undefined}
              onClick={download ? (e) => downloadCV(e, href, filename) : undefined}
              className="group flex items-center justify-between py-5 text-xl font-medium tracking-tight transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-4">
                <Icon size={18} className="text-muted group-hover:text-accent" />
                {name}
              </span>
              <ArrowUpRight
                size={20}
                className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact