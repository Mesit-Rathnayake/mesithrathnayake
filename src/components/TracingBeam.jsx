import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

function TracingBeam({ children, className = "" }) {
  const containerRef = useRef(null)
  const [beamHeight, setBeamHeight] = useState(600)
  const [activeSection, setActiveSection] = useState("home")
  const [sectionOffsets, setSectionOffsets] = useState([])
  const [beamOpacity, setBeamOpacity] = useState(1)
  const beamContainerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  })

  const updateBeamOpacity = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight
    const winHeight = window.innerHeight
    const distFromBottom = docHeight - scrollTop - winHeight
    // Fade out over the last 200px of scroll
    const fadeThreshold = 200
    setBeamOpacity(Math.min(1, Math.max(0, distFromBottom / fadeThreshold)))
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (beamContainerRef.current) {
        setBeamHeight(beamContainerRef.current.offsetHeight)
      }

      if (containerRef.current) {
        const totalHeight = containerRef.current.scrollHeight - window.innerHeight
        if (totalHeight > 0) {
          const offsets = sections.map((sec) => {
            const el = document.getElementById(sec.id)
            if (!el) return 0
            const elTop = el.getBoundingClientRect().top + window.scrollY - (containerRef.current?.offsetTop || 0)
            return Math.min(Math.max(elTop / (containerRef.current.scrollHeight || 1), 0), 1)
          })
          setSectionOffsets(offsets)
        }
      }

      updateBeamOpacity()
    }

    updateDimensions()
    const timer = setTimeout(updateDimensions, 400)
    window.addEventListener("resize", updateDimensions)
    window.addEventListener("scroll", updateDimensions)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", updateDimensions)
      window.removeEventListener("scroll", updateDimensions)
    }
  }, [updateBeamOpacity])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const beadY = useTransform(progress, [0, 1], [0, Math.max(beamHeight - 16, 0)])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Fixed Viewport Tracing Beam Spine */}
      <div
        ref={beamContainerRef}
        className="pointer-events-none fixed bottom-12 left-3 top-28 z-40 hidden w-8 select-none flex-col items-center sm:left-4 sm:flex md:left-6 lg:left-8"
        style={{
          opacity: beamOpacity,
          transition: "opacity 0.3s ease",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/* SVG Rail and Animated Beam */}
        <svg
          viewBox={`0 0 20 ${beamHeight}`}
          width="20"
          height={beamHeight}
          className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 overflow-visible drop-shadow-[0_0_10px_rgba(243,182,77,0.7)]"
          aria-hidden="true"
        >
          {/* Subtle Base Track */}
          <line
            x1="10"
            y1="0"
            x2="10"
            y2={beamHeight}
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Animated Glowing Amber Gradient Beam */}
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2={beamHeight}
            stroke="url(#tracing-beam-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{
              pathLength: progress,
            }}
          />

          {/* Bright Radiant Core Filament */}
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2={beamHeight}
            stroke="#fff7ed"
            strokeWidth="1.2"
            strokeLinecap="round"
            style={{
              pathLength: progress,
            }}
          />

          <defs>
            <linearGradient
              id="tracing-beam-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#f3b64d" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#ffd58a" stopOpacity="1" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="90%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* Section Waypoint Nodes */}
        {sections.map((sec, idx) => {
          const relativePos =
            sectionOffsets[idx] !== undefined
              ? sectionOffsets[idx]
              : idx / (sections.length - 1)
          const nodeTop = relativePos * Math.max(beamHeight - 16, 0)
          const isActive = activeSection === sec.id

          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ top: `${nodeTop}px` }}
              aria-label={`Scroll to ${sec.label}`}
              className="pointer-events-auto group absolute left-1/2 -translate-x-1/2"
            >
              <div
                className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "scale-125 border border-amber-400 bg-amber-400 shadow-[0_0_12px_#f3b64d]"
                    : "border border-white/20 bg-neutral-900 hover:scale-110 hover:border-amber-400/60"
                }`}
              >
                <div
                  className={`h-1 w-1 rounded-full transition-colors ${
                    isActive
                      ? "bg-neutral-950"
                      : "bg-neutral-400 group-hover:bg-amber-300"
                  }`}
                />
              </div>

              {/* Tooltip on Hover */}
              <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-900/90 px-2 py-0.5 text-[11px] font-medium text-neutral-300 opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                {sec.label}
              </span>
            </a>
          )
        })}

        {/* Glowing Traveling Beacon Bead */}
        <motion.div
          style={{ top: beadY }}
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            className="relative flex h-5 w-5 items-center justify-center rounded-full border border-amber-400/70 bg-neutral-950/90 shadow-[0_0_16px_rgba(243,182,77,0.9)] backdrop-blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 10px rgba(243, 182, 77, 0.5), 0 0 20px rgba(249, 115, 22, 0.3)",
                "0 0 22px rgba(243, 182, 77, 1), 0 0 35px rgba(249, 115, 22, 0.6)",
                "0 0 10px rgba(243, 182, 77, 0.5), 0 0 20px rgba(249, 115, 22, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f3b64d]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="w-full sm:pl-10 md:pl-12 lg:pl-14">
        {children}
      </div>
    </div>
  )
}

export default TracingBeam