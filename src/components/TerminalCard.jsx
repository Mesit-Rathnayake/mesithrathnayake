import { useEffect, useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { motion } from "motion/react"

const defaultCommands = [
  "curl -s https://api.mesith.dev/profile",
  "go run cmd/engineering/main.go",
  "git clone https://github.com/Mesit-Rathnayake",
  "python3 -m ai_model --track=vision",
]

function TerminalCard({
  commands = defaultCommands,
  className = "",
}) {
  const [commandIndex, setCommandIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [copied, setCopied] = useState(false)

  const currentCommand = Array.isArray(commands)
    ? commands[commandIndex % commands.length]
    : commands

  // Typewriter effect
  useEffect(() => {
    let timeout

    if (charIndex < currentCommand.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentCommand.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }, 45) // typing speed
    } else {
      setIsTypingComplete(true)
      timeout = setTimeout(() => {
        // Fade & transition to next command
        setDisplayedText("")
        setCharIndex(0)
        setIsTypingComplete(false)
        if (Array.isArray(commands)) {
          setCommandIndex((prev) => (prev + 1) % commands.length)
        }
      }, 3500) // pause time before next command
    }

    return () => clearTimeout(timeout)
  }, [charIndex, currentCommand, commands])

  // Copy handler
  const handleCopy = () => {
    navigator.clipboard.writeText(currentCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]/90 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          {/* macOS / Linux window dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
          </div>

          <div className="ml-1 flex items-center gap-1.5 text-xs font-medium text-neutral-400 font-mono">
            <Terminal size={13} className="text-amber-400" />
            <span>developer@mesith:~</span>
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label="Copy terminal command"
          className="group flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.04] px-2 py-1 text-[11px] font-mono text-neutral-400 transition-all hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-300 active:scale-95"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} className="text-neutral-400 group-hover:text-amber-300" />
              <span>copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Code Content */}
      <div className="p-4 font-mono text-xs select-text">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold select-none">$</span>
          <span className="text-neutral-200">{displayedText}</span>
          {!isTypingComplete && (
            <motion.span
              className="inline-block h-3.5 w-1.5 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </div>

        {isTypingComplete && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-2 text-[11px] text-neutral-500 font-mono flex items-center gap-2"
          >
            <span className="text-amber-400">➜</span>
            <span>status: 200 OK — Ready to collaborate & innovate</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TerminalCard
