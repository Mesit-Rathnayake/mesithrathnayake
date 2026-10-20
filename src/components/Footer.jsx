import { ArrowUp } from "lucide-react"
import { profile } from "../data/portfolio"

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <p className="label">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <a
          href="#home"
          className="label inline-flex items-center gap-1.5 transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}

export default Footer