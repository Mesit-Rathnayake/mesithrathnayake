import { ArrowDown, ArrowUpRight, Download } from "lucide-react"
import TechText from "./TechText"
import Portrait from "./Portrait"
import Starburst from "./Starburst"
import { profile } from "../data/portfolio"
import { downloadCV } from "../utils/download"

function Hero() {
  return (
    <section id="home" className="px-6 pb-16 pt-24 md:px-10">
      <h1 className="sr-only">
        {profile.name} — Computer Engineering undergraduate
      </h1>

      <div className="mx-auto grid max-w-[1400px] items-end gap-14 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <p className="label flex items-center gap-2">
            <Starburst className="h-3.5 w-3.5 text-accent" />
            Portfolio / 2026
          </p>

          <div className="relative mt-6 h-[clamp(190px,32vh,340px)] w-full">
            <TechText
              text="MESITH"
              fontWeight={800}
              fontSize={600}
              letterSpacing={-0.04}
              color="#f0e8d8"
              accentColor="#f0642b"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              strokeWidth={1.5}
              specks={12}
              selection
              labels
              draggable
              clickKick
              sweep
              bounce={0.4}
              intro="none"
              guides={false}
            />
          </div>

          <p className="label mt-2 text-dim">
            Hover, click or drag the letters
          </p>

          <p className="mt-8 max-w-xl text-xl font-medium leading-snug tracking-tight md:text-2xl">
            {profile.headline}
          </p>

          <div className="glass mt-8 grid gap-6 p-5 sm:grid-cols-3">
            <div>
              <p className="label">Now</p>
              <p className="mt-2 flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {profile.now}
              </p>
            </div>

            <div>
              <p className="label">Based in</p>
              <p className="mt-2">{profile.location}</p>
            </div>

            <ul className="flex flex-col gap-1.5">
              <li>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  Selected work
                  <ArrowDown
                    size={16}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
              </li>
              <li>
                <a
                  href={profile.cv}
                  download="Mesith-Rathnayake-CV.pdf"
                  onClick={(e) =>
                    downloadCV(e, profile.cv, "Mesith-Rathnayake-CV.pdf")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                >
                  Download CV
                  <Download size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <Portrait />
        </div>
      </div>
    </section>
  )
}

export default Hero