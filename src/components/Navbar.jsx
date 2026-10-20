import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { profile } from "../data/portfolio"

const navLinks = [
  { name: "Work", id: "work" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Activity", id: "activity" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
]

const clockFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timezone,
})

const getTime = () => clockFormat.format(new Date())

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("")
  const [time, setTime] = useState(getTime)

  useEffect(() => {
    const timer = setInterval(() => setTime(getTime()), 30000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-line bg-bg/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#home" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`label transition-colors hover:text-fg ${
                  active === link.id ? "!text-accent" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="label hidden tabular-nums md:block">
          {profile.location} {time}
        </p>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute left-0 top-14 h-[calc(100vh-3.5rem)] w-full bg-bg/90 px-6 py-8 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={link.id} className="border-b border-line">
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-baseline gap-4 py-5 text-3xl font-semibold tracking-tight"
                >
                  <span className="label">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar