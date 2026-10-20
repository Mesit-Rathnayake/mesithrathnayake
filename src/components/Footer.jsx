import { ArrowUp } from "lucide-react"
import { profile } from "../data/portfolio"

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative z-10 border-t border-line/60 bg-black/70 px-6 py-8 backdrop-blur-md md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left Side: Crisp, legible copyright and status */}
        <div className="flex items-center gap-2.5 font-mono text-xs text-fg/80 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-medium text-fg">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="text-dim">•</span>
          <span className="text-muted">All rights reserved</span>
        </div>

        {/* Right Side: Back to top button with visible border, background, and hover feedback */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 border border-line bg-petrol/35 px-4 py-2 font-mono text-xs uppercase tracking-wider text-fg transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent sm:text-sm"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp
            size={14}
            className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer