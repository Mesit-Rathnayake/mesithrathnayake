import { ArrowUp } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
          >
            M<span className="text-amber-400">R.</span>
          </a>

          <p className="mt-2 text-sm text-neutral-500">
            © {currentYear} Mesith Rathnayake.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Mesit-Rathnayake"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-400/40 hover:text-amber-300"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/mesith-rathnayake-37647a213/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-400/40 hover:text-amber-300"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href="#home"
            aria-label="Return to top"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-neutral-950 transition hover:bg-amber-300"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer