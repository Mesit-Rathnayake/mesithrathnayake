import { ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Software Engineering",
  "DevOps & Cloud",
  "Computer Vision",
  "Creative Technology",
]

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-8"
    >
      <div className="hero-grid absolute inset-0 opacity-50" />

      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Open to professional opportunities and collaborations
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Computer Engineering Undergraduate
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building intelligent,
            <span className="block text-neutral-500">
              scalable and creative
            </span>
            digital experiences.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            I&apos;m Mesith Rathnayake, a Computer Engineering undergraduate
            passionate about artificial intelligence, software engineering,
            DevOps, computer vision and creative technology.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-neutral-950 transition hover:bg-amber-300"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-3">
            <a
              href="https://github.com/Mesit-Rathnayake"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/mesith-rathnayake-37647a213/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:mesithrathnayake0930@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-sm text-neutral-500">
                  Current focus
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Creative Engineering
                </h2>
              </div>

              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                2026
              </span>
            </div>

            <div className="space-y-3">
              {focusAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-5 py-4"
                >
                  <span className="font-medium text-neutral-200">
                    {area}
                  </span>

                  <span className="text-xs text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/5 bg-black/20 p-5">
              <pre className="overflow-x-auto font-mono text-sm leading-7 text-neutral-400">
                <code>
{`const developer = {
  engineering: true,
  creativity: true,
  curiosity: "always"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero